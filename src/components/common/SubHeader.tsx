import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { SubHeaderProps, SubHeaderItemProps } from 'types/index'
import { useNavigate } from 'react-router-dom'

export const SubHeader: React.FC<SubHeaderProps> = ({ items, initialItem }) => {
  const [selectedHeader, setSelectedHeader] = useState<string>(initialItem)

  const navigate = useNavigate()

  useEffect(() => {
    setSelectedHeader(
      items.find(item => item.path === window.location.pathname)?.text ||
        initialItem
    )
  }, [items, initialItem])

  const handleSubHeaderClick = (item: SubHeaderItemProps) => {
    navigate(item.path)
  }

  return (
    <>
      <HeaderWrapperSimple>
        {items.map(item => (
          <HeaderItemSimple
            key={item.text}
            $isSelected={selectedHeader === item.text}
            onClick={() => handleSubHeaderClick(item)}>
            {item.text}
          </HeaderItemSimple>
        ))}
      </HeaderWrapperSimple>
    </>
  )
}

// 서브 헤더 래퍼
const HeaderWrapperSimple = styled.div`
  display: flex;
  position: sticky;
  top: 80px;
  height: 50px;
  margin-top: 5px;
  width: 100%;
  padding-bottom: 6px;
  justify-content: space-evenly;
  border-bottom: 1.5px solid ${props => props.theme.greyScale.grey3};
  background-color: ${props => props.theme.main.white};
  z-index: 20;
`

// 서브 헤더 아이템
const HeaderItemSimple = styled.button<{
  $isSelected: boolean
}>`
  width: auto;
  color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.greyScale.grey5};
  border-bottom: ${props => (props.$isSelected ? '2px solid #fff' : 'none')};
  text-decoration: ${props => (props.$isSelected ? '4px underline' : 'none')};
  text-underline-offset: 19.5px;
  font-size: 16px;
  line-height: 19.09px;
  z-index: 2;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.main.blue0};
  }
`
