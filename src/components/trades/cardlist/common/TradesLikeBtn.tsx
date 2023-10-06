import { styled } from 'styled-components'
import { Heart } from 'iconsax-react'

import {
  GroupLikeApi,
  SecondHandLikeApi,
  GroupLikeCancelApi,
  SecondHandLikeCancelApi
} from 'api/trades/index'
import { useEffect, useState } from 'react'

interface HeartProps {
  $isLike: boolean
  onClick?: () => void
}

export const TradesLikeBtn = ({ offerId, isBookmarked, productId }) => {
  const [likeSuccess, setLikeSuccess] = useState(isBookmarked)

  useEffect(() => {}, [offerId, productId])

  const handleLike = async () => {
    if (offerId) {
      const api = isBookmarked ? GroupLikeCancelApi : GroupLikeApi
      const response = await api(offerId)

      if (response) {
        setLikeSuccess(!likeSuccess)
      }
    } else if (productId) {
      const api = isBookmarked ? SecondHandLikeCancelApi : SecondHandLikeApi
      const response = await api(productId)

      if (response) {
        setLikeSuccess(!likeSuccess)
      }
    }
  }
  return (
    <>
      <StyledWrapper>
        <StyledIcon
          onClick={handleLike}
          $isLike={likeSuccess}>
          <Heart />
        </StyledIcon>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.button`
  width: 24px;
  height: 24px;
  top: 8px;
  left: 136px;
  position: absolute;
`

const StyledIcon = styled(Heart)<HeartProps>`
  width: 24px;
  height: 24px;
  fill: ${props => (props.$isLike ? props.theme.subColor.prettyRed : 'none')};
  color: ${props =>
    props.$isLike ? props.theme.subColor.prettyRed : props.theme.main.black};
`
