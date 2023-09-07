import { FindId } from 'components/index'
import { FindPassword } from 'components/index'
import { IdForm } from 'components/index'
import { LogInButton } from 'components/index'
import { PasswordForm } from 'components/index'
import { SignUp } from 'components/index'
import { styled } from 'styled-components'


export const SignIn = () => {
  return (
    <SignInContainer>
      <IdForm></IdForm>
      <PasswordForm></PasswordForm>
      <LogInButton></LogInButton>
      <FindId></FindId>
      <FindPassword></FindPassword>
      <SignUp></SignUp>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`

`
