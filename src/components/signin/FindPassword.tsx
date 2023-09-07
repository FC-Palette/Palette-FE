import { SIGNIN_FORM_TEXT } from "constants/signin/signInTexts";
import { styled } from "styled-components";

export const FindPassword = () => {
    return (
        <FindPasswordWrap>{SIGNIN_FORM_TEXT.findPasswordText}</FindPasswordWrap>
    )
}

const FindPasswordWrap = styled.div`
`

export default FindPassword;
