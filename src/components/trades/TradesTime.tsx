import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesTime = () => {
  return (
    <>
      <Time />
    </>
  )
}

const Time = styled.div`
  width: 170px;
  height: 25px;
  top: 125px;
  background-color: ${theme.greyScale.grey3};
  position: absolute;
`
