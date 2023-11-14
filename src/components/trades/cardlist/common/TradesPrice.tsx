import { theme } from 'styles/index'
import { styled, css } from 'styled-components'
import { TradesClosingProps } from 'types/trades/index'

export const TradesPrice = ({ price, isClosing, isSoldOut }) => {
  const formattedPrice = new Intl.NumberFormat().format(price)
  const displayPrice = price === 0 ? '무료나눔' : formattedPrice

  const displayWon = price !== 0 && <Won>원</Won>

  return (
    <PriceWrapper
      isClosing={isClosing}
      isSoldOut={isSoldOut}>
      <Price>{displayPrice}</Price>
      {displayWon}
    </PriceWrapper>
  )
}

const PriceWrapper = styled.div<TradesClosingProps>`
  display: flex;
  width: 141px;
  height: 32px;
  margin-top: 4px;
  color: ${theme.greyScale.grey9};
  ${props =>
    (props.isClosing || props.isSoldOut) &&
    css`
      color: ${theme.greyScale.grey3};
    `}
  gap: 4px;
`

const Price = styled.div`
  font-size: ${theme.customSize.xxlarge};
  font-weight: 600;
  display: flex;
  align-items: end;
`

const Won = styled.div`
  font-weight: 400;
  font-size: ${theme.customSize.large};
  padding-top: 12px;
`
