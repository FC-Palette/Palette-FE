import styled from 'styled-components'
import {
  GetStats,
  GetThumbnail,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
import {
  PurchaseInfo,
  PreviewPrice,
  PreviewCategory,
  PreviewHeader,
  PreviewUrl
} from 'components/trades/preview/index'
import { ManagerInfo } from 'components/trades/detail/index'
import { GroupPurchaseDetail } from 'api/trades/index'
import { GroupPurchaseDetailResProps } from 'types/trades/index'
import { useEffect, useState } from 'react'

export const PurchaseDetailCard = ({ offerId }) => {
  const [purchaseDetailList, setPurchaseDetailList] =
    useState<GroupPurchaseDetailResProps | null>(null)

  useEffect(() => {
    const DetailData = async () => {
      try {
        const res = await GroupPurchaseDetail(offerId)
        if (res.success) {
          setPurchaseDetailList(res.response)
        } else {
          console.error('서버에서 오류 응답을 받았습니다.')
        }
      } catch (error) {
        console.error('요청을 보낼 때 오류가 발생했습니다.', error)
      }
    }
    DetailData()
  }, [offerId])

  return (
    <>
      {purchaseDetailList && (
        <>
          <PreviewHeader title={purchaseDetailList.title} />
          <Wrapper>
            <GetThumbnail meetupImages={purchaseDetailList.image} />
            <ManagerInfo
              managerImg={purchaseDetailList.member.image}
              managerInfo={purchaseDetailList.member.bio}
              managerName={purchaseDetailList.member.nickname}
            />
            <PreviewPrice price={purchaseDetailList.price} />
            <GetTitleAndDescription
              detailText="아직 이 공동거래에 대한 소개가 작성되지 않았어요."
              meetupTitle={purchaseDetailList.title}
              meetupDescription={purchaseDetailList.description}
            />
            <PreviewCategory category={purchaseDetailList.category} />
            <GetStats />
            <PurchaseInfo
              currentCount={purchaseDetailList.currentParticipantCount}
              startDay={purchaseDetailList.startDate}
              endDay={purchaseDetailList.endDate}
              timeRemaining={''}
              headCount={purchaseDetailList.headCount}
            />
            <PreviewUrl shopUrl={purchaseDetailList.shopUrl} />
          </Wrapper>
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`
