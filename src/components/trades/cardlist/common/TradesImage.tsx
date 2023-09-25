import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesImage = ({ image }) => {
  return (
    <>
      <Image>{image}</Image>
    </>
  )
}

const Image = styled.div`
  width: 165px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${theme.greyScale.grey5};
`
