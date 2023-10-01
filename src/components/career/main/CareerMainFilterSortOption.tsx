import { CommonArrowDownFill, CommonCheckIcon } from '@/components'
import { useState } from 'react'
import { styled } from 'styled-components'

interface DropdownProps {
  $isOpen: boolean
}

interface OptionItemProps {
  $isSelected: boolean
  onClick: () => void
}

export interface CareerMainFilterSortOptionItem {
  value: string
  label: string
}

export const CareerMainFilterSortOption = ({
  items
}: {
  items: CareerMainFilterSortOptionItem[]
}) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [selectedOptions, setSelectedOptions] = useState<string[]>(['최신순'])
  const [selectedOption, setSelectedOption] = useState('최신순')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <SelectContainer>
      <SelectButton onClick={toggleDropdown}>
        {selectedOption} <CommonArrowDownFill size={16} />
      </SelectButton>
      <DropdownMenu $isOpen={isOpen}>
        {items.map(item => (
          <OptionItem
            key={item.value}
            onClick={() => handleOptionClick(item.label)}
            $isSelected={item.label === selectedOption}>
            {item.label} {item.label === selectedOption && <CommonCheckIcon />}
          </OptionItem>
        ))}
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
  padding: 10px 10px 10px 30px;
  font-size: 14px;
  cursor: pointer;
  max-width: 145px;

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
  z-index: 12;
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
