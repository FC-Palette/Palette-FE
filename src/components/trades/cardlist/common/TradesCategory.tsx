import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesCategory = ({ category }) => {
  return (
    <>
      <CategoryWrapper>{category}</CategoryWrapper>
    </>
  )
}

const CategoryWrapper = styled.div`
  height: 25px;
  top: 158px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  font-size: ${theme.customSize.medium};
  background-color: ${theme.greyScale.grey2};
  display: flex;
  align-items: center;
  color: ${theme.greyScale.grey7};
  font-weight: 400;
`
