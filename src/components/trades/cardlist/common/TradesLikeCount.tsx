import { styled } from 'styled-components'
import { Heart } from 'iconsax-react'

export const TradesLikeCount = ({ hits }) => {
  return (
    <>
      <StyledWrapper>
        <StyledIcon>
          <Heart />
        </StyledIcon>
        {hits}
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
