import { styled } from 'styled-components'

export const CareerMainItemCategory = ({ jobs }) => {
  const categoryChips = jobs.map((category, index) => {
    return <CategoryItem key={index}>{category}</CategoryItem>
  })
  return <CategoryWrap>{categoryChips}</CategoryWrap>
}

const CategoryWrap = styled.div`
  display: flex;
  width: auto;
  gap: 4px;
`

const CategoryItem = styled.div`
  width: auto;
  height: 25px;
  color: ${props => props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
`
