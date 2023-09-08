import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Heart } from 'iconsax-react'

export const TradesLikeBtn = () => {
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
  width: 24px;
  height: 24px;
  top: 8px;
  left: 136px;
  position: absolute;
`

const StyledIcon = styled(Heart)`
  width: 24px;
  height: 24px;
`
