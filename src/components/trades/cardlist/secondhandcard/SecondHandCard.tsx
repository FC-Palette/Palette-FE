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
import { SecondHandListApi } from 'api/trades/index'
import { SecondHandResProps } from 'types/trades/index'
import { rowCentralise } from 'styles/index'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { SecondHandSortedData, TradesSortResponseData } from 'utils/index'
import { careerSortGlobalState } from 'recoil/index'
import { CommonSpinner } from 'components/index'
import { isSoldOutState } from 'recoil/index'
import {
  FilteredDataState,
  SecondHandCountState
} from 'recoil/tradescreateglobalstate'

export const SecondHandCard = () => {
  const [secondHandList, setSecondHandList] = useState<SecondHandResProps[]>([])
  const navigate = useNavigate()
  const isSoldOut = useRecoilValue(isSoldOutState)
  const [isLoading, setIsLoading] = useState(true)
  const sortState = useRecoilValue(careerSortGlobalState)
  const [TradesSortedData, setTradesSortedData] = useState<
    SecondHandSortedData[]
  >([])
  const [filteredData] = useRecoilValue(FilteredDataState)
  const setSecondHandCount = useSetRecoilState(SecondHandCountState)

  useEffect(() => {
    const fetchData = async () => {
      if (filteredData) {
        const parsedData = JSON.parse(filteredData)
        if (parsedData.response.length === 0) {
          const res = await SecondHandListApi()
          if (res.success) {
            setSecondHandList(res.response)
          }
        } else {
          setSecondHandList(parsedData.response)
        }
        setSecondHandCount(parsedData.response.length)
      } else {
        const res = await SecondHandListApi()
        if (res.success) {
          setSecondHandList(res.response)
          setSecondHandCount(res.response.length)
        }
      }
      setIsLoading(false)
    }

    fetchData()
  }, [isSoldOut, filteredData])

  useEffect(() => {
    if (!isLoading && secondHandList.length > 0 && sortState.filter) {
      const sortedResult = TradesSortResponseData(
        secondHandList,
        sortState.filter
      )
      setTradesSortedData(sortedResult)
    }
  }, [isLoading, secondHandList, sortState.filter])

  const handleDetail = itemId => {
    navigate(`/secondhand/${itemId}`)
  }
  if (isLoading) {
    return <CommonSpinner />
  }

  return (
    <>
      {TradesSortedData && TradesSortedData.length > 0 ? (
        TradesSortedData.filter(item => isSoldOut || !item.isSoldOut).map(
          item => (
            <Container key={item.id}>
              <TradesLikeBtn
                productId={item.id}
                offerId={null}
                isBookmarked={item.isBookmarked}
              />
              <ClickWrapper onClick={() => handleDetail(item.id)}>
                <TradesPreview>
                  <TradesImage
                    imageUrl={item.thumbnailUrl}
                    isSoldOut={item.isSoldOut}
                    isClosing={null}
                  />
                </TradesPreview>
                <TradesCategory
                  category={item.category}
                  isSoldOut={item.isSoldOut}
                  isClosing={null}
                />
                <TitleWrapper>
                  <TradesTitle
                    title={item.title}
                    isSoldOut={item.isSoldOut}
                    isClosing={null}
                  />
                  <TradesPrice
                    price={item.price}
                    isClosing={null}
                    isSoldOut={item.isSoldOut}
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
