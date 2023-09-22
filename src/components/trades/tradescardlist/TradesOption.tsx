import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesOption = () => {
  return (
    <>
      <Select id="sortBy">
        <Option value="latest">최신 순</Option>
        <Option value="oldest">오래된 순</Option>
      </Select>
    </>
  )
}
const Select = styled.select`
  border-radius: 8px;
  padding: 9px 14px;
  border: none;
`
const Option = styled.option`
  font-weight: 400;
  font-size: ${theme.customSize.medium};
`
