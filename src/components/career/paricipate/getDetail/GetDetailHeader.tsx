import { Header, UseBackgroundModal, UseButtons } from '@/components'
import { ArrowLeft2, Heart, More, Send2, Trash, Edit } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CREATE_EDIT_TEXT, DELETE_MODAL_TEXT } from '@/constants'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { fetchDetailGlobalState } from '@/recoil'

import {
  meetingDeleteRequestApi,
  requestMeetingLikeApi,
  requestMeetingLikeCancelApi
} from '@/api'

interface DropdownProps {
  $isOpen: boolean
}

interface OptionItemProps {
  $isSelected: boolean
  onClick: () => void
}

interface HeartProps {
  $isLike: boolean
  onClick?: () => void
}

export const GetDetailHeader = ({ isAdmin, meetingId }) => {
  const navigate = useNavigate()
  const atom = useRecoilValue(fetchDetailGlobalState)
  const { title, likemsg } = atom
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [useModal, setUseModal] = useState(false)
  const [likeSuccess, setLikeSuccess] = useState(likemsg)
  const isManager = isAdmin

  const moveToEdit = () => {
    navigate('/edit/1', {
      state: { meetingId }
    })
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
    if (value === '수정하기') {
      moveToEdit()
    }
    if (value === '삭제하기') {
      setUseModal(!useModal)
    }
  }

  // GUEST: 찜하기 기능
  const handleLike = async () => {
    const api = likemsg ? requestMeetingLikeCancelApi : requestMeetingLikeApi
    const response = await api(meetingId)

    if (response) {
      setLikeSuccess(!likeSuccess)
    }
  }

  // HOST: 삭제 기능
  const handleConfirmYes = async () => {
    const res = await meetingDeleteRequestApi(meetingId)

    if (res.status === 200) {
      navigate('/career')
      setUseModal(false)
    }
  }

  const handleConfirmNo = () => {
    setUseModal(false)
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
        <StyledHeard
          onClick={handleLike}
          $isLike={likeSuccess}
        />
      </MultiIconWrap>
    )
  }

  return (
    <>
      <Header
        leftIcon={
          <StyledIcon onClick={() => navigate('/career')}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText={title.length > 15 ? title.slice(0, 10) + '...' : title}>
        {dynamicHeaderIcon(isManager)}
      </Header>

      {useModal && (
        <UseBackgroundModal
          modalState={useModal}
          title={DELETE_MODAL_TEXT[0]}
          content={DELETE_MODAL_TEXT[1]}>
          <UseButtons
            modalState={useModal}
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={DELETE_MODAL_TEXT[2]}
            rightBtn={DELETE_MODAL_TEXT[3]}
          />
        </UseBackgroundModal>
      )}
    </>
  )
}

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

  cursor: pointer;
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

const StyledHeard = styled(Heart)<HeartProps>`
  fill: ${props => (props.$isLike ? props.theme.subColor.prettyRed : 'none')};
  color: ${props =>
    props.$isLike ? props.theme.subColor.prettyRed : props.theme.main.black};
`