import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesCategory = () => {
  return (
    <>
      <Category>가전/디지털</Category>
    </>
  )
}

const Category = styled.div`
  height: 25px;
  top: 158px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  background-color: ${theme.greyScale.grey2};
`
