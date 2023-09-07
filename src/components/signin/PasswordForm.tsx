import { SIGNIN_FORM_TEXT } from 'constants/index'
import { Input } from 'components/index'
import { styled } from 'styled-components'


export const PasswordForm = () => {
    return (
    <PasswordFormWrap>
        {SIGNIN_FORM_TEXT.passwordFormText}
        <Input ph={SIGNIN_FORM_TEXT.passwordInputPlaceholderText}></Input>
    </PasswordFormWrap>
    )
}

const PasswordFormWrap = styled.div`
    display: flex;
    flex-direction: column;
`


