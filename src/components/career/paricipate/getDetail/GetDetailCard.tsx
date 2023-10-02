import styled from 'styled-components'
import {
  GetDetailCategoryChips,
  GetDetailFooterAndButtonGuest,
  GetDetailFooterAndButtonHost,
  GetDetailHeader,
  GetDetailManagerInfo,
  GetDetailMeetupInfo,
  GetDetailMembersInfo,
  GetDetailSimilarMeetupInfo,
  GetDetailStats,
  GetDetailThumbnail,
  GetDetailTitleAndDescription
} from '.'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  fetchDetailIdApi,
  fetchMemberInfoApi,
  fetchRecommendMeetingsApi
} from '@/api'
import { CommonSpinner } from '@/components'
import { fetchDetailInitialState, fetchMemberInitailState } from '@/constants'

export const GetDetailCard = () => {
  const isAdmin = true
  const { detailid } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [meetingRes, setMeetingRes] = useState(fetchDetailInitialState)
  const [memberRes, setMemberRes] = useState(fetchMemberInitailState)
  const [recommendRes, setRecommendRes] = useState([])

  useEffect(() => {
    const fetchDetailData = async () => {
      if (detailid) {
        const [meetingRes, memberRes, recommendRes] = await Promise.all([
          fetchDetailIdApi(detailid),
          fetchMemberInfoApi(detailid),
          fetchRecommendMeetingsApi(detailid)
        ])
        if (meetingRes.response !== null) {
          setMeetingRes(meetingRes.response)

          setIsLoading(false)
        }

        if (memberRes.response !== null) {
          setMemberRes(memberRes.response)
        }

        if (recommendRes.response !== null) {
          setRecommendRes(recommendRes.response)
        }
      }
    }
    console.log('멤버 API 호출', memberRes) // 현재 서버에서 넘겨주는 멤버 배열이 빈 배열임
    console.log('비슷한 모임 추천 호출', recommendRes)
    fetchDetailData()
  }, [detailid])

  const {
    title,
    description,
    acceptType,
    meetingMemberResponseDto,
    image,
    sex,
    headCount,
    startDate,
    endDate,
    jobs,
    week,
    days,
    time,
    progressTime,
    hits,
    likes,
    createdAt
  } = meetingRes

  const renderContent = () => {
    if (isLoading) {
      return <CommonSpinner />
    }

    return (
      <>
        <GetDetailHeader title={title} />
        <GetDetailThumbnail image={image} />
        <GetDetailManagerInfo
          meetingMemberResponseDto={meetingMemberResponseDto}
        />
        <GetDetailTitleAndDescription
          title={title}
          description={description}
        />
        <GetDetailCategoryChips jobs={jobs} />
        <GetDetailStats
          hits={hits}
          likes={likes}
          createdAt={createdAt}
        />
        <GetDetailMeetupInfo
          sex={sex}
          headCount={headCount}
          week={week}
          days={days}
          acceptType={acceptType}
          startDate={startDate}
          endDate={endDate}
          time={time}
          progressTime={progressTime}
        />
        <GetDetailMembersInfo memberRes={memberRes.response} />
        {/* <GetDetailSimilarMeetupInfo recommendRes={recommendRes} /> */}

        <GetDetailSimilarMeetupInfo />

        {renderFooter()}
      </>
    )
  }

  const renderFooter = () => {
    return isAdmin ? (
      <GetDetailFooterAndButtonHost />
    ) : (
      <GetDetailFooterAndButtonGuest />
    )
  }
  return <Card>{renderContent()}</Card>
}

const Card = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`
