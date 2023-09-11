import { styled } from 'styled-components'
import { Heart } from 'iconsax-react'
export const CareerMainItemLikeButton = () => {
  return (
    <>
      <StyledWrapper>
        <StyledIcon>
          <Heart />
        </StyledIcon>
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.button`
  position: absolute;
  left: 382px;
`

const StyledIcon = styled(Heart)`
  width: 24px;
  height: 24px;
`
