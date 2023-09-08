import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Timer1 } from 'iconsax-react'

export const TradesTime = () => {
  return (
    <Wrapper>
      <Time>
        <StyledIcon>
          <Timer1 />
        </StyledIcon>
        2:59:59
      </Time>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 170px;
  height: 25px;
  top: 125px;
  background-color: ${theme.greyScale.grey6};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const Time = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: ${theme.customSize.medium};
  color: ${theme.main.white};
`
const StyledIcon = styled(Timer1)`
  color: ${theme.main.white};
  width: 16px;
  height: 16px;
  margin-right: 2px;
`
