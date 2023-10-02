import { styled } from 'styled-components'
import { Heart } from 'iconsax-react'
import { requestMeetingLikeApi, requestMeetingLikeCancelApi } from '@/api'
import { useEffect, useState } from 'react'
import { theme } from '@/styles'

export const CareerMainItemLikeButton = ({ meetingId }) => {
  const [like, setLike] = useState(false)
  // const [cancel, setCancel] = useState(false)

  const fetchLikeStatus = async () => {
    const [likeResponse, cancelResponse] = await Promise.all([
      requestMeetingLikeApi(meetingId),
      requestMeetingLikeCancelApi(meetingId)
    ])
    if (likeResponse !== null) {
      setLike(likeResponse.success) // 성공 시 찜 상태로 설정
    }

    if (cancelResponse !== null) {
      // setCancel(cancelResponse.success) // 성공 시 취소 상태로 설정
    }
  }

  useEffect(() => {
    fetchLikeStatus() // 초기 랜더링 시 데이터 가져오기
  }, [meetingId])

  // 찜하기 또는 취소하기 클릭 시 상태를 변경하는 함수
  const toggleLike = async () => {
    try {
      if (like) {
        // 현재 찜 상태인 경우, 취소 API 호출
        await requestMeetingLikeCancelApi(meetingId)
        setLike(false) // 찜 상태 해제
      } else {
        // 현재 찜하지 않은 상태인 경우, 찜 API 호출
        await requestMeetingLikeApi(meetingId)
        setLike(true) // 찜 상태 설정
      }
    } catch (error) {
      console.error('찜하기 또는 취소하기 중 오류 발생:', error)
    }
  }

  return (
    <StyledIcon onClick={toggleLike}>
      <Heart fill={like ? theme.subColor.prettyRed : theme.main.black} />
    </StyledIcon>
  )
}

const StyledIcon = styled(Heart)`
  width: 24px;
  height: 24px;
`
