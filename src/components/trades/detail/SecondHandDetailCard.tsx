import styled from 'styled-components'
import { theme } from 'styles/index'
import { GetTitleAndDescription } from 'components/career/create/isUserInfo/index'
import {
  SecondHandInfo,
  PreviewPrice,
  PreviewCategory
} from 'components/trades/preview/index'
import { ManagerInfo } from 'components/trades/detail/index'
import { SecondHandDetailResProps } from 'types/trades/index'
import { useEffect, useState } from 'react'
import { SecondHandDetail } from 'api/trades/index'
import { ImageDetail, DetailHeader } from 'components/trades/detail/index'
import { CareerCreateMeetingCommonQuestion } from 'components/career/create/common/index'
import { decoder } from 'utils/index'
import { PurchaseFooter, DetailStats } from 'components/trades/detail/index'
import {
  TradesImage,
  TradesTitle,
  TradesPrice
} from 'components/trades/cardlist/index'

export const SecondHandDetailCard = ({ productId }) => {
  const [secondHandDetailList, setSecondHandDetailList] =
    useState<SecondHandDetailResProps | null>(null)
  const decodedToken = decoder()
  const isAdmin = decodedToken?.memberId === secondHandDetailList?.member?.id

  useEffect(() => {
    const DetailData = async () => {
      const res = await SecondHandDetail(productId)
      if (res.success) {
        setSecondHandDetailList(res.response)
      }
    }

    DetailData()
  }, [productId])

  const handleWrapperClick = productId => {
    window.location.href = `${productId}`
  }
  return (
    <>
      {secondHandDetailList && (
        <>
          <DetailHeader
            title={secondHandDetailList.title}
            productId={productId}
            offerId={null}
            isAdmin={isAdmin}
          />
          <Wrapper>
            <ImageDetail meetupImages={secondHandDetailList.images} />
            <ManagerInfo
              managerImg={secondHandDetailList.member.image}
              managerInfo={secondHandDetailList.member.bio}
              managerName={secondHandDetailList.member.nickname}
            />
            <PreviewPrice price={secondHandDetailList.price} />
            <GetTitleAndDescription
              detailText="아직 이 중고거래에 대한 소개가 작성되지 않았어요."
              title={secondHandDetailList.title}
              description={secondHandDetailList.description}
            />
            <PreviewCategory category={secondHandDetailList.category} />
            <DetailStats
              hits={secondHandDetailList.bookmarkCount}
              likes={secondHandDetailList.hits}
              createdAt={secondHandDetailList.createdAt}
            />
            <SecondHandInfo
              selectedDays={''}
              transactionStartTime={secondHandDetailList.transactionStartTime}
              transactionEndTime={secondHandDetailList.transactionEndTime}
            />
            <CareerCreateMeetingCommonQuestion>
              사용자님의 다른상품
            </CareerCreateMeetingCommonQuestion>

            {secondHandDetailList?.anotherProductDtos.map(product => (
              <OtherWrapper
                onClick={() => handleWrapperClick(product.id)}
                key={product.id}>
                <TradesImage imageUrl={product.thumbnailUrl}></TradesImage>
                <InfoWrapper>
                  <TradesTitle title={product.title}></TradesTitle>
                  <TradesPrice price={product.price}></TradesPrice>
                </InfoWrapper>
              </OtherWrapper>
            ))}
          </Wrapper>
          <PurchaseFooter
            isAdmin={isAdmin}
            isClosing={null}
            isSoldOut={secondHandDetailList.isSoldOut}
            offerId={null}
            productId={productId}
            isParticipating={null}
          />
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin-bottom: 30px;
`

const OtherWrapper = styled.div`
  width: 165px;
  height: 235px;
  margin: 7% 5.7% 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0px 8px 16px ${theme.greyScale.grey3};
  cursor: pointer;
`

const InfoWrapper = styled.div`
  padding: 10px;
  width: 100%;
  gap: 15px;
  overflow-x: scroll;
  padding-bottom: 8px;
`
