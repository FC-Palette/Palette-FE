import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesImage = ({ imageUrl }) => {
  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  }

  return <Image style={imageStyle} />
}
const Image = styled.div`
  width: 165px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${theme.greyScale.grey5};
  z-index: 20;
`
