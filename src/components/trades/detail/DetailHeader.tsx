import { BackgroundModal, Header, ModalButtons } from '@/components'
import { ArrowLeft2, Heart, More, Send2, Trash, Edit } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { SECONDHAND_DELETE_MODAL_TEXT } from 'constants/trades/index'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'
import { CREATE_EDIT_TEXT } from 'constants/index'

interface DropdownProps {
  $isOpen: boolean
}

interface OptionItemProps {
  $isSelected: boolean
  onClick: () => void
}

export const DetailHeader = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const isManager = true
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalOnState)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
    if (value === '수정하기') {
      navigate('/secondhandUpload/1')
    }
    if (value === '삭제하기') {
      setIsModalOpen(!isModalOpen)
    }
  }

  const handleConfirmYes = () => {
    alert('삭제')
  }

  const handleConfirmNo = () => {
    setIsModalOpen(false)
  }

  const dynamicHeaderIcon = (isManager: boolean) => {
    const iconSize = 18
    return isManager ? (
      <MultiIconWrap>
        <Send2 />
        <DropdownMenu $isOpen={isOpen}>
          {CREATE_EDIT_TEXT.map(item => (
            <OptionItem
              key={item.value}
              onClick={() => handleOptionClick(item.label)}
              $isSelected={item.label === selectedOption}>
              {item.label}
              {item.label === '수정하기' ? (
                <Edit size={iconSize} />
              ) : (
                <Trash size={iconSize} />
              )}
            </OptionItem>
          ))}
        </DropdownMenu>
        <More onClick={toggleDropdown} />
      </MultiIconWrap>
    ) : (
      <MultiIconWrap>
        <Send2 />
        <Heart />
      </MultiIconWrap>
    )
  }

  return (
    <Wrap>
      <Header
        leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText={title}>
        {dynamicHeaderIcon(isManager)}
      </Header>

      {isModalOpen && (
        <BackgroundModal
          title={SECONDHAND_DELETE_MODAL_TEXT[0]}
          content={SECONDHAND_DELETE_MODAL_TEXT[1]}>
          <ModalButtons
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={SECONDHAND_DELETE_MODAL_TEXT[2]}
            rightBtn={SECONDHAND_DELETE_MODAL_TEXT[3]}
          />
        </BackgroundModal>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
`

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const MultiIconWrap = styled.div`
  display: flex;
  width: 58px;
  gap: 10px;
  font-weight: 100;
  font-size: ${props => props.theme.customSize.xxlarge};
  height: 24px;
`

const DropdownMenu = styled.div<DropdownProps>`
  position: absolute;
  top: 35px;
  width: 150px;
  max-width: 236px;
  right: 1px;
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
