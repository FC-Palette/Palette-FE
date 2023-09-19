import { AlarmList, Footer, Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { StyledIcon } from "."
import { styled } from "styled-components"
import { AlarmSelectTab } from "components/index"

export const Alarm = () => {
  return (
    <AlarmWrap>
        <Header 
        leftIcon={
        <StyledIcon>
        <ArrowLeft2 />
        </StyledIcon>}
        centerText="설정">
        </Header>
    <AlarmSelectTab />

    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />
    <AlarmList />

    <Footer />
    </AlarmWrap>
    )
}

const AlarmWrap = styled.div`
    /* width: 430px; */
    min-height: 100vh;
`