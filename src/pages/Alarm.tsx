import { AlarmList, Footer, Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { StyledIcon } from "pages/index"
import { styled } from "styled-components"
import { AlarmSelectTab } from "components/index"
import { useNavigate } from "react-router-dom"

export const Alarm = () => {
    const navigate = useNavigate()
    return (
    <AlarmWrap>
        <Header 
        leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
        <ArrowLeft2 />
        </StyledIcon>}
        centerText="알림내역">
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
    <Footer />
    </AlarmWrap>
    )
}

const AlarmWrap = styled.div`
    max-width: 430px;
    min-height: 100vh;
    overflow-y: scroll;
`