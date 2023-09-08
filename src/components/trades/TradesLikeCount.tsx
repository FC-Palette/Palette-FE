import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Heart } from 'iconsax-react'

export const TradesLikeCount = () => {
  return (
    <>
      <StyledWrapper>
        <StyledIcon>
          <Heart />
        </StyledIcon>
        10
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 4px;
`

const StyledIcon = styled(Heart)`
  width: 16px;
  height: 16px;
`
