import { Button } from 'components/index'
import { theme } from 'styles/index'
import { styled } from 'styled-components'

//두개로 나뉜 모달 버튼들입니다.
export const ModalButtons = ({ leftBtn, rightBtn }) => {
  return (
    <Buttons>
      <Button
        color={theme.greyScale.grey5}
        $bgColor={theme.greyScale.bluegrey}
        $borderColor={theme.greyScale.bluegrey}
        $btnHeight="48px"
        $fontSize="16px">
        {leftBtn}
      </Button>
      <Button
        $bgColor={theme.main.blue0}
        $btnWidth="127px"
        $btnHeight="48px"
        $fontSize="16px">
        {rightBtn}
      </Button>
    </Buttons>
  )
}

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 263px;
`
