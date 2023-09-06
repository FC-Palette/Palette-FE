import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesLikeBtn = () => {
  return (
    <>
      <LikeButton />
    </>
  )
}

const LikeButton = styled.button`
  width: 24px;
  height: 24px;
  top: 8px;
  left: 151px;
  position: absolute;
  background-color: black;
`
