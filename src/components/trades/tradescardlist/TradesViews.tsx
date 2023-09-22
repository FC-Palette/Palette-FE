import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Eye } from 'iconsax-react'

export const TradesViews = () => {
  return (
    <>
      <StyledWrapper>
        <StyledIcon>
          <Eye />
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

const StyledIcon = styled(Eye)`
  width: 16px;
  height: 16px;
`
