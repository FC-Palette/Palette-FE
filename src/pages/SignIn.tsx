import { SignInField, FindUserField, Header } from 'components/index'
import { SignUp } from 'components/index'
import { ArrowLeft2 } from 'iconsax-react'
import { styled } from 'styled-components'


export const SignIn = () => {
  return (
    <SignInContainer>
        <Header leftIcon={
          <StyledIcon>
            <ArrowLeft2 />
          </StyledIcon>}
        centerText="로그인">
        </Header>
      <SignInField></SignInField>
      <FindUserField></FindUserField>
      <SignUp></SignUp>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`
  margin: 0 auto;
  width: 430px;
  height: 100%;
  position: relative;
`
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};

`
