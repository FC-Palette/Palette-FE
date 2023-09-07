import { FindId } from '@/components/signin/FindId'
import FindPassword from '@/components/signin/FindPassword'
import IdForm from '@/components/signin/IdForm'
import LogInButton from '@/components/signin/LogInButton'
import PasswordForm from '@/components/signin/PasswordForm'
import SignUp from '@/components/signin/SignUp'
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

export default SignIn;
