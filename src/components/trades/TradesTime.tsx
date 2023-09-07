import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesTime = () => {
  return (
    <Wrapper>
      <Time>12시간 24분 남았습니다.</Time>
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
  font-weight: 400;
  font-size: ${theme.customSize.tiny};
  color: ${theme.main.white};
`
