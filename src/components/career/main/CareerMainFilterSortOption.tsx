import { CommonArrowDownFill, CommonCheckIcon } from '@/components'
import { useState } from 'react'
import { styled } from 'styled-components'

interface DropdownProps {
  $isOpen: boolean
}

interface OptionItemProps {
  $isSelected: boolean
}

export const CareerMainFilterSortOption = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value: string) => {
    if (selectedOptions.includes(value)) {
      // 이미 선택된 옵션인 경우, 선택 해제
      setSelectedOptions(selectedOptions.filter(option => option !== value))
    } else {
      // 선택되지 않은 옵션인 경우, 선택
      setSelectedOptions([...selectedOptions, value])
    }
    setIsOpen(false)
  }

  const isOptionSelected = (value: string) => {
    return selectedOptions.includes(value)
  }

  return (
    <SelectContainer>
      <SelectButton onClick={toggleDropdown}>
        최신순 <CommonArrowDownFill size={16} />
      </SelectButton>
      <DropdownMenu $isOpen={isOpen}>
        <OptionItem
          onClick={() => handleOptionClick('최신순')}
          $isSelected={isOptionSelected('최신순')}>
          최신순 {isOptionSelected('최신순') && <CommonCheckIcon />}
        </OptionItem>
        <OptionItem
          onClick={() => handleOptionClick('조회순')}
          $isSelected={isOptionSelected('조회순')}>
          조회순 {isOptionSelected('조회순') && <CommonCheckIcon />}
        </OptionItem>
        <OptionItem
          onClick={() => handleOptionClick('찜 많은 순')}
          $isSelected={isOptionSelected('찜 많은 순')}>
          찜 많은 순 {isOptionSelected('찜 많은 순') && <CommonCheckIcon />}
        </OptionItem>
        <OptionItem
          onClick={() => handleOptionClick('모임시작일 순')}
          $isSelected={isOptionSelected('모임시작일 순')}>
          모임시작일 순{' '}
          {isOptionSelected('모임시작일 순') && <CommonCheckIcon />}
        </OptionItem>
      </DropdownMenu>
    </SelectContainer>
  )
}

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 10px 0 10px 30px;
  font-size: 14px;
  cursor: pointer;
  width: 100px;

  &:hover {
    color: ${props => props.theme.main.blue0};
  }
`

const DropdownMenu = styled.div<DropdownProps>`
  position: absolute;
  top: 100%;
  right: 10%;
  min-width: 120px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  z-index: 1;
  white-space: nowrap;
`

const OptionItem = styled.div<OptionItemProps>`
  padding: 8px;
  font-size: 14px;
  color: ${props => props.theme.greyScale.grey6};
  border-bottom: 1px solid ${props => props.theme.greyScale.grey3};
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  &:last-child {
    border: none;
  }
  &:hover {
    background-color: #f0f0f0;
  }

  &:first-child:hover {
    background-color: #f0f0f0;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:last-child:hover {
    background-color: #f0f0f0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`

// ----------------------------------------- 기존 ------------------------------------------
// import { styled } from 'styled-components'

// export const CareerMainFilterSortOption = () => {
//   return (
//     <>
//       <Select id="sortBy">
//         <Option value="latest">최신 순</Option>
//         <Option value="oldest">오래된 순</Option>
//       </Select>
//     </>
//   )
// }

// const Select = styled.select`
//   border-radius: 8px;
//   /* padding: 9px 14px; */

//   border: none;
// `
// const Option = styled.option`
//   font-weight: 400;
//   font-size: ${props => props.theme.customSize.medium};
// `
