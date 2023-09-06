import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesCategory = () => {
  return (
    <>
      <Category />
    </>
  )
}

const Category = styled.div`
  width: 62px;
  height: 19px;
  top: 154px;
  left: 6px;
  gap: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  position: absolute;
  background-color: grey;
`
