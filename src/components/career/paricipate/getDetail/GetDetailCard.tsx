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
  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/')
    }
  }, [loggedInUser])

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

        <GetDetailMembersInfo isAdmin={isAdmin} />

        <GetDetailSimilarMeetupInfo />
      </>
    )
  }

  const renderFooter = () => {
    if (isLoading) {
      return 
    }

    return isAdmin ? (
      <GetDetailFooterAndButtonHost loggedInUser={loggedInUser} />
    ) : (
      <GetDetailFooterAndButtonGuest loggedInUser={loggedInUser} />
    )
  }

  return (
    <Card>
      {renderContent()}
      {renderFooter()}
    </Card>
  )
}

const Card = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`
