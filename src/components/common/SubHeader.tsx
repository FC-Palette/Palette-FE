import { useState } from 'react'
import { styled } from 'styled-components'
import { SubHeaderProps } from 'types/index'

export const SubHeader: React.FC<SubHeaderProps> = ({ items, initialItem }) => {
  const [selectedHeader, setSelectedHeader] = useState<string>(initialItem)

  const handleSubHeaderClick = (header: string) => {
    setSelectedHeader(header)
    // 추후 페이지 이동 필요시 로직 추가
  }
  return (
    <>
      <HeaderWrapperSimple>
        {items.map(header => (
          <HeaderItemSimple
            key={header}
            $isSelected={selectedHeader}
            onClick={() => handleSubHeaderClick(header)}>
            {header}
          </HeaderItemSimple>
        ))}
      </HeaderWrapperSimple>
    </>
  )
}

// 서브 헤더 래퍼
const HeaderWrapperSimple = styled.div`
  display: flex;
  position: fixed;
  top: 80px;
  width: 100%;
  padding-bottom: 6px;
  justify-content: space-evenly;
  border-bottom: 1.5px solid ${props => props.theme.greyScale.grey3};
  background-color: ${props => props.theme.main.white};
  z-index: 2;
`

// 서브 헤더 아이템
const HeaderItemSimple = styled.div<{ $isSelected: string }>`
  width: auto;
  color: ${props =>
    props.$isSelected === props.children
      ? props.theme.main.blue0
      : props.theme.greyScale.grey5};
  border-bottom: ${props => (props.$isSelected ? '2px solid #fff' : 'none')};
  text-decoration: ${props =>
    props.$isSelected === props.children ? '4px underline' : 'none'};
  text-underline-offset: 10.5px;
  font-size: 16px;
  line-height: 19.09px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.main.blue0};
  }
`
