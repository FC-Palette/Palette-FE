import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const PreviewPrice = ({ price }) => {
  let priceText = ''

  if (price === 0) {
    priceText = '무료나눔'
  } else {
    const parsedPrice = parseFloat(price)
    priceText = `${parsedPrice.toLocaleString()}원`
  }

  return <Wrapper>{priceText}</Wrapper>
}

const Wrapper = styled.div`
  margin-left: 24px;
  font-size: 18px;
  margin-top: 13px;
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.main.black};
  font-weight: 700;
`
