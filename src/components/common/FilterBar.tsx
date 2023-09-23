import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { FilterBarProps } from 'types/index'

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

// 수정 전
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 30px;
  position: relative;
  margin-top: 10px;
`
const FilterWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 1px;
`

const Text = styled.div`
  font-weight: 400;
  font-size: ${theme.customSize.large};
  display: flex;
  align-items: center;
`

const OptionWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 1px;
`
