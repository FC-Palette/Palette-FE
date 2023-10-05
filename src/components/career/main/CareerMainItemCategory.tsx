import { styled } from 'styled-components'

interface CategoryItemProps {
  $isGrey: boolean
}

export const CareerMainItemCategory = ({ jobs, remainingSeats }) => {
  const categoryChips = jobs.slice(0, 2).map((category, index) => {
    return (
      <CategoryItem
        key={index}
        $isGrey={remainingSeats === 0}>
        {category}
      </CategoryItem>
    )
  })
  return <CategoryWrap>{categoryChips}</CategoryWrap>
}

const CategoryWrap = styled.div`
  display: flex;
  max-width: 230px;
  width: 230px;
  gap: 4px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

const CategoryItem = styled.div<CategoryItemProps>`
  width: auto;
  height: 25px;
  color: ${props =>
    props.$isGrey ? props.theme.greyScale.grey4 : props.theme.greyScale.grey7};
  background-color: ${props => props.theme.greyScale.grey2};
  font-size: 14px;
  line-height: 16.71px;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
`
