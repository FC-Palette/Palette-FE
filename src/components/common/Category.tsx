import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
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
`
const CategoryBar = styled.div`
  display: flex;
  position: absolute;
  left: 8%;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 6px;
  background-color: ${theme.greyScale.grey3};
  font-weight: 400;
  font-size: ${theme.customSize.large};
`

const FilterWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 8%;
`
