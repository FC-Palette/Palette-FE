import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { CategoryBarProps } from 'types/filterBarProps'
import { CommonArrowDownFill } from '.'

export const Category: React.FC<CategoryBarProps> = ({
  categoryList,
  categoryFilter
}) => {
  const chips = categoryList?.map((item, index) => {
    if (Array.isArray(item)) {
      return (
        <CategoryContainer key={index}>
          {item.map((innerItem, innerIndex) => (
            <CategoryBar key={innerIndex}>
              {innerItem} <CommonArrowDownFill size={16} />
            </CategoryBar>
          ))}
        </CategoryContainer>
      )
    } else if (typeof item === 'string') {
      return (
        <CategoryBar key={index}>
          {item} <CommonArrowDownFill size={16} />
        </CategoryBar>
      )
    }

    return null
  })

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
  gap: 10px;
  min-height: 48px;
  padding: 10px 20px;
  overflow-x: auto;
  justify-content: space-between;
`

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`
const CategoryBar = styled.button`
  white-space: nowrap;
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
  right: 20px;
`
