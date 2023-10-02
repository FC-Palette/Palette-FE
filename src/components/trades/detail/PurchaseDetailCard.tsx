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
  const [timeremaining, setTimeremaining] = useState<string>('')

  useEffect(() => {
    const DetailData = async () => {
      try {
        const res = await GroupPurchaseDetail(offerId)
        if (res.success) {
          setPurchaseDetailList(res.response)

          const endDate = new Date(res.response.endDate)
          const currentTime = new Date()
          const timeDifference = endDate.getTime() - currentTime.getTime()
          const days = Math.floor(timeDifference / (3600000 * 24)) // 일
          const hours = Math.floor((timeDifference % (3600000 * 24)) / 3600000) // 시간
          const minutes = Math.floor((timeDifference % 3600000) / 60000) // 분

          const remainingTime = `${days}일 ${hours} : ${minutes} `

          setTimeremaining(remainingTime)
        } else {
        }
      } catch (error) {}
    }
    DetailData()
  }, [offerId])

  const startDateString = purchaseDetailList
    ? new Date(purchaseDetailList.startDate)
        .toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
        .replace(/\.$/, '') // 마지막 마침표 제거
    : ''
  const endDateString = purchaseDetailList
    ? new Date(purchaseDetailList.endDate)
        .toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
        .replace(/\.$/, '') // 마지막 마침표 제거
    : ''

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
              startDay={startDateString}
              endDay={endDateString}
              timeRemaining={timeremaining}
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
