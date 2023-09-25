import { styled } from 'styled-components'
import { Eye } from 'iconsax-react'

export const TradesViews = ({ bookmarkCount }) => {
  return (
    <>
      <StyledWrapper>
        <StyledIcon>
          <Eye />
        </StyledIcon>
        {bookmarkCount}
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 4px;
`

const StyledIcon = styled(Eye)`
  width: 16px;
  height: 16px;
`
