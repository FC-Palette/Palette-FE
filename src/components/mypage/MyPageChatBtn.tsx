import styled from "styled-components"
import { Button } from ".."
import { START_MEET_TEXT } from "@/constants"
import { theme } from "@/styles"

export const MyPageChatBtn = () => {
  return (
    <BtnWrap>
      <Button 
      $bgColor={theme.main.white}
      color={theme.main.blue0}>
        {START_MEET_TEXT.startChatBtnText}
      </Button>
    </BtnWrap>
  )
}


const BtnWrap = styled.div`
  max-width: 430px;
  width: 186px;
  Button{
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`