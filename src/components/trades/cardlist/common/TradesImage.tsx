import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { TradesClosingProps } from 'types/trades/index'

export const TradesImage = ({ imageUrl, isClosing, isSoldOut }) => {
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }

  return (
    <Image
      style={imageStyle}
      isClosing={isClosing}
      isSoldOut={isSoldOut}
    />
  )
}
const Image = styled.div<TradesClosingProps>`
  width: 165px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${theme.greyScale.grey5};
  z-index: 20;
  opacity: ${({ isClosing, isSoldOut }) =>
    isClosing || isSoldOut ? '0.6' : '1'};
`
