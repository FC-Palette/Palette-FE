import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { Timer1 } from 'iconsax-react'
import { centralise } from 'styles/index'

export const TradesTime = ({ time }) => {
  return (
    <Wrapper>
      <Time>
        <StyledIcon>
          <Timer1 />
        </StyledIcon>
        {time}
      </Time>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 165px;
  height: 25px;
  top: 125px;
  background-color: ${theme.greyScale.grey6};
  position: absolute;
  ${centralise};
  z-index: 10;
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
