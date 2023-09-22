import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { CategoryBarProps } from 'types/filterBarProps'

export const Category: React.FC<CategoryBarProps> = ({
  categoryList,
  categoryFilter
}) => {
  return (
    <Wrapper>
      <CategoryBar>{categoryList}</CategoryBar>
      <FilterWrapper>{categoryFilter}</FilterWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 48px;
  position: relative;
  gap: 4px;
  margin-top: 10px;
`
const CategoryBar = styled.button`
  display: flex;
  position: absolute;
  left: 8%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 12px;
  background-color: ${theme.greyScale.grey2};
  font-weight: 400;
  font-size: ${theme.customSize.large};
`

const FilterWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 8%;
`
