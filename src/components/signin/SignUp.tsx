import { NAVIGATION_PATH, SIGNIN_FORM_TEXT } from "constants/index";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "styles/index"

export const SignUp = () => {
    return (
        <SignUpContainer>
            <CheckIdText>{SIGNIN_FORM_TEXT.haveNotIdText}</CheckIdText>
            <Link {...NAVIGATION_PATH.navigatorSignUpPage}>
            <SignUpLink>{SIGNIN_FORM_TEXT.signUpText}</SignUpLink>
            </Link>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    position: absolute;
    margin: 0 auto;
    bottom: 26px;
    left: 21%;
    display: flex;
`


const CheckIdText = styled.div`
    height: 17px;
    font-size: 14px;
    font-weight: 400px;
    color: ${theme.greyScale.grey7};
`

const SignUpLink = styled.div`
    margin: 0 10px;
    font-size: 14px;
    height: 17px;
    color: ${theme.main.blue0};
    text-align: center;
`

