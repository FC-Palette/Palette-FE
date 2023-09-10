import { theme } from "styles/index"
import { Button } from "components/index"
import { START_TEXTS } from "constants/index"
import { Link } from "react-router-dom"
import { styled } from "styled-components"




export const Start = () => {
    return (
    <Wrapper>
        <Container>
            <StartHeaderText>{START_TEXTS.headerText}</StartHeaderText>
            <StartTitle>{START_TEXTS.mainTitleText}</StartTitle>
            <StartIntro>{START_TEXTS.introFirstText}</StartIntro>
            <StartIntro>{START_TEXTS.introSecondText}</StartIntro>
            <StartSignUp>
                <Link to="/signup">
                <Button $bgColor={theme.main.white}
                color={theme.main.blue0}
                $btnWidth="382px">
                    오피스너 시작하기
                </Button>
                </Link>
            </StartSignUp>
            <StartSignInWrap>
                <StartSignIn>{START_TEXTS.existenceText}</StartSignIn>
                <Link to="/signin">
                <MoveToSignInPage>{START_TEXTS.linkToSignInText}</MoveToSignInPage>
                </Link>
            </StartSignInWrap>
        </Container>
    </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;
    background-color: ${(props)=>props.theme.main.blue0};
    margin: 0 auto;
    width: 430px;
    height: 100vh;
    color: ${(props)=>props.theme.main.white};

`

const Container = styled.div`
    position: relative;
    top: 26.824%;
    padding-left: 5.581%;
    padding-right: 5.581%;
`

const StartHeaderText = styled.span`
    padding-bottom: 3px;
    font-size: 26px;
    font-weight: 600;
    height: 36px;
    line-height: 36px;
`

const StartTitle = styled.div`
    font-size: 36px;
    font-weight: 700;
    padding-bottom: 24px;
    line-height: 42.96px;    
`

const StartIntro = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 19.09px;
    
`

const StartSignUp = styled.div`
    margin-bottom: 24px;
    margin-top: 48px;
    font-size: 20px;
    font-weight: 500;
    Button{
        margin: 0 auto;
    }
`

const StartSignIn = styled.span`
    padding-right: 3px;
`


const MoveToSignInPage = styled.span` 
    text-decoration: underline;
    text-underline-position: under;
    color: ${(props)=>props.theme.main.white};
`


const StartSignInWrap = styled.div`
    text-align: center;
`