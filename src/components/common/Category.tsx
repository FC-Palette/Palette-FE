import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { CategoryBarProps } from 'types/filterBarProps'

export const Category: React.FC<CategoryBarProps> = ({
  categoryList,
  categoryFilter
}) => {
  const chips = categoryList?.map(item => (
    <CategoryBar key={item}>{item}</CategoryBar>
  ))

  return (
    <Wrapper>
      {chips}
      <FilterWrapper>{categoryFilter}</FilterWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 10px;
  width: 100%;
  min-height: 48px;
  padding: 10px 20px;
  overflow-x: auto;
`

const CategoryBar = styled.button`
  width: auto;
  white-space: nowrap;
  left: 1px;
  display: flex;
  align-items: center;
  border-radius: 21px;
  padding: 8px 10px;
  margin-top: 10px;
  background-color: ${theme.greyScale.grey2};
  font-weight: 400;
  font-size: ${theme.customSize.large};
`

const FilterWrapper = styled.div`
  position: absolute;
  right: 20px;
`
