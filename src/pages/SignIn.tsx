import { SignInField, FindUserField, Header } from 'components/index'
import { SignUp } from 'components/index'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

export const SignIn = () => {
  const navigate = useNavigate()
  return (
    <SignInContainer>
        <Header leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>}
        centerText="로그인">
        </Header>
      <FieldWrap>
        <SignInField></SignInField>
        <FindUserField></FindUserField>
        <SignUp></SignUp>
      </FieldWrap>
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

const FieldWrap = styled.div`
  max-width: 430px;
  margin: 0 24px;
  `

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};

`
