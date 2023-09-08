import { SignInField, FindUserField } from 'components/index'
import { SignUp } from 'components/index'
import { styled } from 'styled-components'


export const SignIn = () => {
  return (
    <SignInContainer>
      <SignInField></SignInField>
      <FindUserField></FindUserField>
      <SignUp></SignUp>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`
  position: relative;
  top: 124px;
`
