import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const PreviewPrice = ({ price }) => {
  const parsedPrice = parseFloat(price)

  const formattedPrice = parsedPrice.toLocaleString()
  return <Wrapper>{formattedPrice}원</Wrapper>
}

const Wrapper = styled.div`
  margin-left: 24px;
  font-size: 18px;
  margin-top: 13px;
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.main.black};
  font-weight: 700;
`
