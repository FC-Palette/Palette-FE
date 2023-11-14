import { styled } from 'styled-components'
import { Heart } from 'iconsax-react'
import { requestMeetingLikeApi, requestMeetingLikeCancelApi } from '@/api'
import { useState } from 'react'

interface HeartProps {
  $isLike: boolean
  onClick?: () => void
}

export const CareerMainItemLikeButton = ({ meetingId, likemsg }) => {
  const [likeSuccess, setLikeSuccess] = useState(likemsg)

  // 찜하기 또는 취소하기 클릭 시 상태를 변경하는 함수
  const handleLike = async () => {
    const api = likemsg ? requestMeetingLikeCancelApi : requestMeetingLikeApi
    const response = await api(meetingId)

    if (response) {
      setLikeSuccess(!likeSuccess)
    }
  }

  return (
    <StyledIcon
      onClick={handleLike}
      $isLike={likeSuccess}>
      <Heart />
    </StyledIcon>
  )
}

const StyledIcon = styled(Heart)<HeartProps>`
  width: 24px;
  height: 24px;
  fill: ${props => (props.$isLike ? props.theme.subColor.prettyRed : 'none')};
  color: ${props =>
    props.$isLike ? props.theme.subColor.prettyRed : props.theme.main.black};
`
