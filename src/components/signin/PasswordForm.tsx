import { SIGNIN_FORM_TEXT } from 'constants/signin/signInTexts'
import { Input } from 'components/index'
import { styled } from 'styled-components'


export const PasswordForm = () => {
    return (
    <PasswordFormWrap>
        {SIGNIN_FORM_TEXT.passwordFormText}
        <Input></Input>
    </PasswordFormWrap>
    )
}

const PasswordFormWrap = styled.div`
    display: flex;
    flex-direction: column;
`


export default PasswordForm;