import styled from 'styled-components'
import { GetTitleAndDescription } from 'components/career/create/isUserInfo/index'
import {
  PurchaseInfo,
  PreviewPrice,
  PreviewCategory,
  PreviewUrl
} from 'components/trades/preview/index'
import { ManagerInfo } from 'components/trades/detail/index'
import { GroupPurchaseDetail } from 'api/trades/index'
import { GroupPurchaseDetailResProps } from 'types/trades/index'
import { useEffect, useState } from 'react'
import { DetailStats } from 'components/trades/detail/index'
import { ImageDetail, DetailHeader } from 'components/trades/detail/index'
import { PurchaseFooter } from 'components/trades/detail'
import { decoder } from 'utils/index'

export const PurchaseDetailCard = ({ offerId }) => {
  const [purchaseDetailList, setPurchaseDetailList] =
    useState<GroupPurchaseDetailResProps | null>(null)
  const [timeremaining, setTimeremaining] = useState<string>('')
  const decodedToken = decoder()
  const isAdmin = decodedToken?.memberId === purchaseDetailList?.member?.id
  const [profile, setProfile] = useState({
    image: '',
    bio: '',
    nickname: '',
    followingId: ''
  })

  useEffect(() => {
    const DetailData = async () => {
      const res = await GroupPurchaseDetail(offerId)
      console.log(res.response)
      if (res.success) {
        setPurchaseDetailList(res.response)

        const endDate = new Date(res.response.endDate)
        const currentTime = new Date()
        const timeDifference = endDate.getTime() - currentTime.getTime()
        const days = Math.floor(timeDifference / (3600000 * 24)) // 일
        const remainingTime = `${days}일`

        setTimeremaining(remainingTime)

        const updatedProfile = {
          image: res.response.member.image || '',
          bio: res.response.member.bio || '',
          nickname: res.response.member.nickname || '',
          followingId: res.response.member.id || ''
        }
        setProfile(updatedProfile)
      }
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
          <DetailHeader
            title={purchaseDetailList.title}
            offerId={offerId}
            productId={null}
            isAdmin={isAdmin}
            isBookmarked={purchaseDetailList.isBookmarked}
          />
          <Wrapper>
            <ImageDetail meetupImages={purchaseDetailList.image} />
            <ManagerInfo
              managerImg={purchaseDetailList.member.image}
              managerInfo={purchaseDetailList.member.bio}
              managerName={purchaseDetailList.member.nickname}
              id={purchaseDetailList.member.id}
              profile={profile}
            />
            <PreviewPrice price={purchaseDetailList.price} />
            <GetTitleAndDescription
              detailText="아직 이 공동거래에 대한 소개가 작성되지 않았어요."
              title={purchaseDetailList.title}
              description={purchaseDetailList.description}
            />
            <PreviewCategory category={purchaseDetailList.category} />
            <DetailStats
              hits={purchaseDetailList.bookmarkCount}
              likes={purchaseDetailList.hits}
              createdAt={purchaseDetailList.createdAt}
            />
            <PurchaseInfo
              currentCount={purchaseDetailList.currentParticipantCount}
              startDay={startDateString}
              endDay={endDateString}
              timeRemaining={timeremaining}
              headCount={purchaseDetailList.headCount}
            />
            <PreviewUrl shopUrl={purchaseDetailList.shopUrl} />
          </Wrapper>
          <PurchaseFooter
            isAdmin={isAdmin}
            isClosing={purchaseDetailList.isClosing}
            isSoldOut={null}
            offerId={offerId}
            productId={null}
            isParticipating={purchaseDetailList.isParticipating}
          />
        </>
      )}
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`
