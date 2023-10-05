import styled, { css } from "styled-components"
import { Button } from ".."
import { START_MEET_TEXT } from "@/constants"
import { theme } from "@/styles"

export const MyPageChatBtn = () => {
  return (
    <BtnWrap hide={location.pathname === '/mypage'}>
      <Button 
      $bgColor={theme.main.white}
      color={theme.main.blue0}>
        {START_MEET_TEXT.startChatBtnText}
      </Button>
    </BtnWrap>
  )
}


const BtnWrap = styled.div<{ hide: boolean }>`
  width: 100%;
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
  Button{
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }

`