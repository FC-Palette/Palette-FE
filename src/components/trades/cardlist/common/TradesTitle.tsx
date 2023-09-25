import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesTitle = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  )
}

const Title = styled.div`
  width: 150px;
  font-weight: 400;
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey9};
  cursor: pointer;
`
