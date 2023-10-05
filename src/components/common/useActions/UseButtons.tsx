import { Button } from 'components/index'
import { Flexbox, theme } from 'styles/index'
import { styled } from 'styled-components'

import { ModalButtonsProps } from '@/types'
import { useState } from 'react'
//두개로 나뉜 모달 버튼들입니다.
export const UseButtons = ({
  leftBtn,
  rightBtn,
  onLeftClick,
  onRightClick,
  modalState
}: ModalButtonsProps) => {
  const [modalOn, setModalOn] = useState(modalState)
  const handleModalOn = () => {
    setModalOn(!modalOn)
  }

  return (
    <Buttons>
      <Button
        color={theme.greyScale.grey5}
        $bgColor={theme.greyScale.bluegrey}
        $borderColor={theme.greyScale.bluegrey}
        $btnHeight="48px"
        $fontSize="16px"
        onClick={onLeftClick || handleModalOn}>
        {leftBtn}
      </Button>
      <Button
        $bgColor={theme.main.blue0}
        $btnWidth="127px"
        $btnHeight="48px"
        $fontSize="16px"
        onClick={onRightClick}>
        {rightBtn}
      </Button>
    </Buttons>
  )
}

const Buttons = styled(Flexbox)`
  justify-content: space-between;
  width: 263px;
`
