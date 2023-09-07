import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { FilterBarProps } from 'types/filterBarProps'

export const FilterBar: React.FC<FilterBarProps> = ({
  filterButton,
  filterOption,
  filterText
}) => {
  return (
    <Wrapper>
      <FilterWrapper>
        {filterButton}
        <Text>{filterText}</Text>
      </FilterWrapper>
      <OptionWrapper>{filterOption}</OptionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: auto;
  height: 30px;
`
const FilterWrapper = styled.header`
  display: flex;
`

const Text = styled.header`
  display: flex;
`

const OptionWrapper = styled.header`
  display: flex;
`
