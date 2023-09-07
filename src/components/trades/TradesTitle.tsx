import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesTitle = () => {
  return (
    <>
      <Title>삼성주식 공동구매합시다</Title>
    </>
  )
}

const Title = styled.div`
  width: 150px;
  font-weight: 400;
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey9};
`
