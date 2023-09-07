import { START_TEXTS } from "constants/start/startTexts"
import { styled } from "styled-components"



export const Start = () => {
    return (
    <Wrapper>
        <Container>
            <StartHeaderText>{START_TEXTS.headerText}</StartHeaderText>
            <StartTitle>{START_TEXTS.mainTitleText}</StartTitle>
            <StartIntro>{START_TEXTS.introFirstText}</StartIntro>
            <StartIntro>{START_TEXTS.introSecondText}</StartIntro>
            <StartSignIn>{START_TEXTS.existenceText}</StartSignIn>
        </Container>
    </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;
    background-color: ${(props)=>props.theme.main.blue0};
    margin: 0 auto;
    width: 100%;
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
    font-family: 'Pretendard-Regular';
    padding-bottom: 48px;
    line-height: 19.09px;
`

const StartSignIn = styled.div`
    text-align: center;
`