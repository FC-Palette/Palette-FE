import { theme } from 'styles/index'
import { styled } from 'styled-components'
import {
  TradesViews,
  TradesLikeBtn,
  TradesCategory,
  TradesImage,
  TradesLikeCount,
  TradesTitle,
  TradesPrice
} from 'components/trades/cardlist/index'
import { useEffect, useState } from 'react'
import { GroupPurchaseListApi } from 'api/trades/index'
import { GroupPurchaseResProps } from 'types/trades/index'
import { rowCentralise } from 'styles/index'
import { useNavigate } from 'react-router-dom'
import { isClosingState } from 'recoil/index'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { TradesSortedData, TradesSortResponseData } from 'utils/index'
import { careerSortGlobalState } from 'recoil/index'
import { CommonSpinner } from 'components/index'
import {
  TradesFilterDataState,
  ListCountState
} from 'recoil/tradescreateglobalstate'
// import { useQuery } from '@tanstack/react-query'

export const PurchaseCard = () => {
  const [purchaseList, setPurchaseList] = useState<GroupPurchaseResProps[]>([])
  const navigate = useNavigate()
  const isClosing = useRecoilValue(isClosingState)
  const sortState = useRecoilValue(careerSortGlobalState)
  const [isLoading, setIsLoading] = useState(true)
  const [TradesSortedData, setTradesSortedData] = useState<TradesSortedData[]>(
    []
  )
  const [tradesFilterData] = useRecoilValue(TradesFilterDataState)
  const setCountState = useSetRecoilState(ListCountState)

  useEffect(() => {
    const fetchData = async () => {
      if (tradesFilterData) {
        const parsedData = JSON.parse(tradesFilterData)
        if (parsedData.response.length === 0) {
          const res = await GroupPurchaseListApi()
          if (res.success) {
            setPurchaseList(res.response)
          }
        } else {
          setPurchaseList(parsedData.response)
        }
        setCountState(parsedData.response.length)
      } else {
        const res = await GroupPurchaseListApi()
        if (res.success) {
          setPurchaseList(res.response)
          setCountState(res.response.length)
        }
      }
      setIsLoading(false)
    }
    fetchData()
  }, [isClosing, tradesFilterData])

  useEffect(() => {
    if (!isLoading && purchaseList.length > 0 && sortState.filter) {
      const sortedResult = TradesSortResponseData(
        purchaseList,
        sortState.filter
      )
      setTradesSortedData(sortedResult)
    }
  }, [isLoading, purchaseList, sortState.filter])

  const handleDetail = itemId => {
    navigate(`/groupPurchase/${itemId}`)
  }

  if (isLoading) {
    return <CommonSpinner />
  }

  return (
    <>
      {TradesSortedData && TradesSortedData.length > 0 ? (
        TradesSortedData.filter(item => isClosing || !item.isClosing).map(
          item => (
            <Container key={item.id}>
              <TradesLikeBtn
                productId={null}
                offerId={item.id}
                isBookmarked={item.isBookmarked}
              />
              <ClickWrapper onClick={() => handleDetail(item.id)}>
                <TradesPreview>
                  <TradesImage
                    imageUrl={item.thumbnailUrl}
                    isClosing={item.isClosing}
                    isSoldOut={null}
                  />
                </TradesPreview>
                <TradesCategory
                  isClosing={item.isClosing}
                  category={item.category}
                  isSoldOut={null}
                />
                <TitleWrapper>
                  <TradesTitle
                    title={item.title}
                    isClosing={item.isClosing}
                    isSoldOut={null}
                  />
                  <TradesPrice
                    price={item.price}
                    isClosing={item.isClosing}
                    isSoldOut={null}
                  />
                </TitleWrapper>
                <TradesCount>
                  <TradesLikeCount hits={item.bookmarkCount} />
                  <TradesViews bookmarkCount={item.hits} />
                </TradesCount>
              </ClickWrapper>
            </Container>
          )
        )
      ) : (
        <span>작성된 글이 없습니다.</span>
      )}
    </>
  )
}

const Container = styled.div`
  ${rowCentralise};
  width: 165px;
  height: 288px;
  box-shadow: 0px 8px 16px ${theme.greyScale.grey3};
  border-radius: 8px;
  position: relative;
  margin-bottom: 15px;
`

const TradesPreview = styled.div`
  width: 165px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

const TitleWrapper = styled.div`
  position: absolute;
  width: 162px;
  top: 187px;
  height: 70px;
  padding: 0px 8px;
  align-content: space-between;
  display: flex;
  flex-wrap: wrap;
`

const ClickWrapper = styled.div`
  cursor: pointer;
`

const TradesCount = styled.div`
  display: flex;
  position: absolute;
  width: 155px;
  top: 265px;
  left: 8px;
  height: 17px;
  gap: 10px;
  font-size: ${theme.customSize.medium};
  color: ${theme.greyScale.grey6};
  font-weight: 400;
`
