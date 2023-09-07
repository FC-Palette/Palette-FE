import { SIGNIN_FORM_TEXT } from "constants/index";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "styles/index"

export const SignUp = () => {
    return (
        <SignUpContainer>
            <CheckIdText>{SIGNIN_FORM_TEXT.haveNotIdText}</CheckIdText>
            <Link to="/signup">
            <SignUpLink>{SIGNIN_FORM_TEXT.signUpText}</SignUpLink>
            </Link>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`


const CheckIdText = styled.div`
    width: 159px;
    height: 17px;
    font-size: 14px;
    font-weight: 400px;
    color: ${theme.greyScale.grey7};
`

const SignUpLink = styled.div`
    margin: 0 10px;
    height: 17px;
    color: ${theme.main.blue0};
    text-align: center;
`
