import { Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { SettingAlarm, SettingManagement, SettingNotice, SettingPassword, SettingService, SettingVersion } from "components/setting"

export const Setting = () => {
  return (
    <SeetingContainer>
    <Header leftIcon={
      <StyledIcon>
        <ArrowLeft2 />
      </StyledIcon>}
    centerText="설정">
    </Header>
    <SettingListWrap>
      <SettingPassword></SettingPassword>
      <SettingAlarm></SettingAlarm>
      <SettingManagement></SettingManagement>
      <SettingNotice></SettingNotice>
      <SettingService></SettingService>
    </SettingListWrap>
    <SettingVersion></SettingVersion>

</SeetingContainer>
  )
}


const SeetingContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 430px;
  position: relative;
`

const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};

`

const SettingListWrap = styled.div`
  width: 100%;
  
`