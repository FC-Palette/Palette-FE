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
    setSelectedHeader(item.text)
    navigate(item.path)
  }

  return (
    <>
      <HeaderWrapperSimple>
        {items.map(item => (
          <HeaderItemSimple
            key={item.text}
            // $isSelected={selectedHeader === item.text}
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
  align-items: center;
  position: sticky;
  top: 80px;
  height: 50px;
  padding-top: 15px;
  width: 100%;
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
  text-underline-offset: 19.5px;
  font-size: 16px;
  line-height: 19.09px;
  z-index: 30;
  height: 30px;
  display: inline-block;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.main.blue0};
  }

  &::after {
    content: '';
    height: 5px;
    background: ${props =>
      props.$isSelected ? props.theme.main.blue0 : 'transparent'};
    margin-top: 11px;
    border-radius: 5px;
    display: block;
  }
`
