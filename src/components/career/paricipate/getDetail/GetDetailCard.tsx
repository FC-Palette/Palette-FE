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
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  fetchDetailIdApi,
  fetchMemberInfoApi,
  fetchRecommendMeetingsApi
} from '@/api'
import { CommonSpinner } from '@/components'
import { decoder } from '@/utils'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  fetchDetailGlobalState,
  fetchDetailMemberState,
  fetchDetailRecommendState
} from '@/recoil'

export const GetDetailCard = () => {
  const { detailid } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [meetingRes, setMeetingRes] = useRecoilState(fetchDetailGlobalState)
  const setMemberRes = useSetRecoilState(fetchDetailMemberState)
  const setRecommendRes = useSetRecoilState(fetchDetailRecommendState)
  const roomAdminId = meetingRes.meetingMemberDto.id // 게시글 글쓴이 id
  const loggedInUser = decoder()?.memberId // 현재 로그인한 유저 id
  const isAdmin = loggedInUser === roomAdminId // 글쓴이 === 로그인한 유저
  const navitate = useNavigate()


  console.log(meetingRes)
  if (!detailid && !loggedInUser) {
    navitate('/career')
  }

  useEffect(() => {
    const fetchDetailData = async () => {
      if (detailid) {
        const [meetingResponse, memberResponse, recommendResponse] =
          await Promise.all([
            fetchDetailIdApi(detailid),
            fetchMemberInfoApi(detailid),
            fetchRecommendMeetingsApi(detailid)
          ])
        if (meetingResponse.status === 200) {
          setMeetingRes(meetingResponse.response)
          setIsLoading(false)
        }

        if (memberResponse.status === 200) {
          setMemberRes(memberResponse.response)
        }

        if (recommendResponse.status === 200) {
          setRecommendRes(recommendResponse.response)
        }
      }
    }

    fetchDetailData()
  }, [detailid])

  const renderContent = () => {
    if (isLoading) {
      return <CommonSpinner />
    }

    return (
      <>
        <GetDetailHeader
          isAdmin={isAdmin}
          meetingId={detailid}
        />
        <GetDetailThumbnail />
        <GetDetailManagerInfo />
        <GetDetailTitleAndDescription />
        <GetDetailCategoryChips />
        <GetDetailStats />
        <GetDetailMeetupInfo />

        {/* 멤버소개: 지금 멤버 데이터 없어서 빈배열 출력됨 */}
        <GetDetailMembersInfo />

        {/* 비슷한 모임 추천: 현재 이미지 없음 */}
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
