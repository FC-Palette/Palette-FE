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
      <Dd>
      <SignInField></SignInField>
      <FindUserField></FindUserField>
      <SignUp></SignUp>
      </Dd>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
  max-width: 430px;
`

const Dd = styled.div`
  max-width: 430px;
  margin: 0 24px;
  `

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};

`
