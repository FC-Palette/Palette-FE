import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat().format(price)
  const displayPrice = price === 0 ? '무료나눔' : formattedPrice

  const displayWon = price !== 0 && <Won>원</Won>

  return (
    <PriceWrapper>
      <Price>{displayPrice}</Price>
      {displayWon}
    </PriceWrapper>
  )
}

const PriceWrapper = styled.div`
  display: flex;
  width: 141px;
  height: 32px;
  margin-top: 4px;
  color: ${theme.greyScale.grey9};
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
