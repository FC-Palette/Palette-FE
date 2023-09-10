import { SIGNIN_FORM_TEXT } from "constants/signin/signInTexts";
import { styled } from "styled-components";

export const FindId = () => {
    return (
        <FindIdWrap>{SIGNIN_FORM_TEXT.findIdText}</FindIdWrap>
    )
}

const FindIdWrap = styled.div`
`

export default FindId;