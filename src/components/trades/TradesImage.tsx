import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesImage = () => {
  return (
    <>
      <Image />
    </>
  )
}

const Image = styled.div`
  width: 170px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${theme.greyScale.grey5};
`
