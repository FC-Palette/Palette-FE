import { theme } from 'styles/index'
import { styled } from 'styled-components'
import {
  TradesTime,
  TradesViews,
  TradesLikeBtn,
  TradesCategory,
  TradesImage,
  TradesLikeCount,
  TradesTitle,
  TradesPrice
} from 'components/trades/cardlist/index'
// import { useEffect, useState } from 'react'
// import { GroupPurchaseListApi, GroupPurchaseResProps } from 'api/trades/index'

export const TradesCard = () => {
  // const [purchaseList, setPurchaseList] = useState<GroupPurchaseResProps[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await GroupPurchaseListApi()
  //     if (response.success) {
  //       setPurchaseList(response.response)
  //     }
  //   }

  //   fetchData()
  // }, [])
  return (
    <>
      <Container>
        {/* {purchaseList.map(item => (
          <div key={item.id}>
            <TradesPreview>
              <TradesImage image={item.thumbnailUrl} />
              <TradesLikeBtn />
              <TradesTime time="2:59:59" />
            </TradesPreview>
            <TradesCategory category={item.category} />
            <TitleWrapper>
              <TradesTitle title={item.title} />
              <TradesPrice price={item.price} />
            </TitleWrapper>
            <TradesCount>
              <TradesLikeCount hits={item.hits} />
              <TradesViews bookmarkCount={item.bookmarkCount} />
            </TradesCount>
          </div>
        ))} */}
      </Container>
      <Container>
        <TradesPreview>
          <TradesImage image="" />
          <TradesLikeBtn />
          <TradesTime time="2:59:59" />
        </TradesPreview>
        <TradesCategory category="디지털/가전" />
        <TitleWrapper>
          <TradesTitle title="언제 끝나냐 하하하하하하하하하" />
          <TradesPrice price="10000" />
        </TitleWrapper>
        <TradesCount>
          <TradesLikeCount hits="10" />
          <TradesViews bookmarkCount="100" />
        </TradesCount>
      </Container>
      <Container>
        <TradesPreview>
          <TradesImage image="" />
          <TradesLikeBtn />
          <TradesTime time="2:59:59" />
        </TradesPreview>
        <TradesCategory category="디지털/가전" />
        <TitleWrapper>
          <TradesTitle title="언제 끝나냐 하하하하하하하하하" />
          <TradesPrice price="10000" />
        </TitleWrapper>
        <TradesCount>
          <TradesLikeCount hits="10" />
          <TradesViews bookmarkCount="100" />
        </TradesCount>
      </Container>
      <Container>
        <TradesPreview>
          <TradesImage image="" />
          <TradesLikeBtn />
          <TradesTime time="2:59:59" />
        </TradesPreview>
        <TradesCategory category="디지털/가전" />
        <TitleWrapper>
          <TradesTitle title="언제 끝나냐 하하하하하하하하하" />
          <TradesPrice price="10000" />
        </TitleWrapper>
        <TradesCount>
          <TradesLikeCount hits="10" />
          <TradesViews bookmarkCount="100" />
        </TradesCount>
      </Container>
      <Container>
        <TradesPreview>
          <TradesImage image="" />
          <TradesLikeBtn />
          <TradesTime time="2:59:59" />
        </TradesPreview>
        <TradesCategory category="디지털/가전" />
        <TitleWrapper>
          <TradesTitle title="언제 끝나냐 하하하하하하하하하" />
          <TradesPrice price="10000" />
        </TitleWrapper>
        <TradesCount>
          <TradesLikeCount hits="10" />
          <TradesViews bookmarkCount="100" />
        </TradesCount>
      </Container>
      <Container>
        <TradesPreview>
          <TradesImage image="" />
          <TradesLikeBtn />
          <TradesTime time="2:59:59" />
        </TradesPreview>
        <TradesCategory category="디지털/가전" />
        <TitleWrapper>
          <TradesTitle title="언제 끝나냐 하하하하하하하하하" />
          <TradesPrice price="10000" />
        </TitleWrapper>
        <TradesCount>
          <TradesLikeCount hits="10" />
          <TradesViews bookmarkCount="100" />
        </TradesCount>
      </Container>
      <Container>
        <TradesPreview>
          <TradesImage image="" />
          <TradesLikeBtn />
          <TradesTime time="2:59:59" />
        </TradesPreview>
        <TradesCategory category="디지털/가전" />
        <TitleWrapper>
          <TradesTitle title="언제 끝나냐 하하하하하하하하하" />
          <TradesPrice price="10000" />
        </TitleWrapper>
        <TradesCount>
          <TradesLikeCount hits="10" />
          <TradesViews bookmarkCount="100" />
        </TradesCount>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  width: 165px;
  height: 288px;
  box-shadow: 0px 8px 16px ${theme.greyScale.grey3};
  border-radius: 8px;
  position: relative;
  margin-bottom: 15px;
  justify-self: center;
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
