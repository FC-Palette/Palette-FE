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
import { useRecoilValue } from 'recoil'
import { isClosingState } from 'recoil/index'
import { SortedData, sortResponseData } from 'utils/index'
import { careerSortGlobalState } from 'recoil/index'

export const SecondHandCard = () => {
  const [secondHandList, setSecondHandList] = useState<SecondHandResProps[]>([])
  const navigate = useNavigate()
  const isClosing = useRecoilValue(isClosingState)
  const sortState = useRecoilValue(careerSortGlobalState)
  const [sortedeData, setSortedData] = useState<SortedData[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await SecondHandListApi()
      if (res.success) {
        setSecondHandList(res.response)
      }
    }
    fetchData()
  }, [isClosing])

  useEffect(() => {
    console.log(sortedeData)
    if (secondHandList && secondHandList.length > 0) {
      const sortedData: SortedData[] = secondHandList.map(item => ({
        createdAt: item.createdAt,
        likes: item.hits,
        price: item.price
      }))

      // sortState.filter에 따라 정렬합니다.
      const sortedResult = sortResponseData(sortedData, sortState.filter)

      // 정렬된 데이터를 업데이트합니다.
      setSortedData(sortedResult)
    }
  }, [secondHandList, sortState.filter])

  const handleDetail = itemId => {
    navigate(`/secondhand/${itemId}`)
  }

  return (
    <>
      {secondHandList
        .filter(item => isClosing || !item.isSoldOut)
        .map(item => (
          <Container key={item.id}>
            <TradesLikeBtn
              productId={item.id}
              offerId={null}
              isBookmarked={item.isBookmarked}
            />
            <ClickWrapper onClick={() => handleDetail(item.id)}>
              <TradesPreview>
                <TradesImage imageUrl={item.thumbnailUrl} />
              </TradesPreview>
              <TradesCategory category={item.category} />
              <TitleWrapper>
                <TradesTitle title={item.title} />
                <TradesPrice price={item.price} />
              </TitleWrapper>
              <TradesCount>
                <TradesLikeCount hits={item.bookmarkCount} />
                <TradesViews bookmarkCount={item.hits} />
              </TradesCount>
            </ClickWrapper>
          </Container>
        ))}
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
