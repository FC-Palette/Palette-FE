import { SIGNIN_FORM_TEXT } from "constants/signin/signInTexts";
import { styled } from "styled-components";

export const SignUp = () => {
    return (
        <SignUpContainer>
            {SIGNIN_FORM_TEXT.haveNotIdText}
            {SIGNIN_FORM_TEXT.signUpText}
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
`

export default SignUp;
