// CommonHeader.js
import { useState } from 'react'
import styled from 'styled-components'
import { Header } from 'components/index'
import { ArrowLeft2, Heart, More, Send2, Trash, Edit } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { SECONDHAND_DELETE_MODAL_TEXT } from 'constants/trades/index'

import {
  UseBackgroundModal,
  UseButtons
} from 'components/common/useActions/index'
import { CREATE_EDIT_TEXT } from 'constants/index'
import { GroupPurchaseDeleteApi, SecondHandDeleteApi } from 'api/trades/index'

interface DropdownProps {
  $isOpen: boolean
}

interface OptionItemProps {
  $isSelected: boolean
  onClick: () => void
}
// 공통 헤더 컴포넌트
export const DetailHeader = ({ title, isAdmin, productId, offerId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()
  const [modal4, setModal4] = useState(false)
  const maxLength = 13

  const truncatedTitle =
    title.length > maxLength ? `${title.substring(0, maxLength)}..` : title

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = value => {
    setSelectedOption(value)
    setIsOpen(false)
    if (value === '수정하기') {
      if (offerId) {
        navigate(`/groupUpload/1`)
      } else {
        navigate('/secondhandupload/1')
      }
    }
    if (value === '삭제하기') {
      setModal4(true)
    }
  }

  const handleConfirmYes = async () => {
    if (offerId) {
      await GroupPurchaseDeleteApi(offerId)
      alert('삭제되었습니다.')
      navigate('/grouppurchase')
      setModal4(false)
    } else {
      await SecondHandDeleteApi(productId)
      alert('삭제되었습니다.')
      navigate('/secondhand')
      setModal4(false)
    }
  }

  const handleConfirmNo = () => {
    setModal4(false)
  }

  const dynamicHeaderIcon = () => {
    const iconSize = 18
    return isAdmin ? (
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
        centerText={truncatedTitle}>
        {dynamicHeaderIcon()}
      </Header>

      {modal4 && (
        <UseBackgroundModal
          title={SECONDHAND_DELETE_MODAL_TEXT[0]}
          content={SECONDHAND_DELETE_MODAL_TEXT[1]}
          modalState={modal4}>
          <UseButtons
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={SECONDHAND_DELETE_MODAL_TEXT[2]}
            rightBtn={SECONDHAND_DELETE_MODAL_TEXT[3]}
          />
        </UseBackgroundModal>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
`

const StyledIcon = styled.div`
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
