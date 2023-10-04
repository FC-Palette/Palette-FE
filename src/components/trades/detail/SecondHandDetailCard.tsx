import styled from 'styled-components'
import { GetTitleAndDescription } from 'components/career/create/isUserInfo/index'
import {
  SecondHandInfo,
  PreviewPrice,
  PreviewCategory
} from 'components/trades/preview/index'
import { ManagerInfo } from 'components/trades/detail/index'
import { SecondHandDetailResProps } from 'types/trades/index'
import { GetDetailStats } from 'components/career/paricipate/getDetail/index'
import { useEffect, useState } from 'react'
import { SecondHandDetail } from 'api/trades/index'
import {
  OthertProducts,
  ImageDetail,
  DetailHeader
} from 'components/trades/detail/index'
import { CareerCreateMeetingCommonQuestion } from 'components/career/create/common/index'
import { decoder } from 'utils/index'
import { PurchaseFooter } from 'components/trades/detail'

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
            <GetDetailStats />
            <SecondHandInfo
              selectedDays={''}
              transactionStartTime={secondHandDetailList.transactionStartTime}
              transactionEndTime={secondHandDetailList.transactionEndTime}
            />
            <CareerCreateMeetingCommonQuestion>
              사용자님의 다른상품
            </CareerCreateMeetingCommonQuestion>
            <OthertProducts />
          </Wrapper>
          <PurchaseFooter
            isAdmin={isAdmin}
            isClosing={null}
            isSoldOut={secondHandDetailList.isSoldOut}
            offerId={null}
            productId={productId}
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
//
