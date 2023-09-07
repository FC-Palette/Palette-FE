import { SIGNIN_FORM_TEXT } from "constants/index";
import { styled } from "styled-components";

export const FindPassword = () => {
    return (
        <FindPasswordWrap>{SIGNIN_FORM_TEXT.findPasswordText}</FindPasswordWrap>
    )
}

const FindPasswordWrap = styled.div`
`

