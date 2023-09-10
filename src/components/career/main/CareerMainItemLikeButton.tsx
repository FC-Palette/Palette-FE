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
  left: 382px;
  margin-right: 24px;
`

const StyledIcon = styled(Heart)`
  width: 24px;
  height: 24px;
`
