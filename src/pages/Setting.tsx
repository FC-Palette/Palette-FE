import { Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { SettingAlarm, SettingManagement, SettingNotice, SettingPassword, SettingService, SettingVersion } from "components/setting"
import { NAVIGATION_PATH } from "@/constants"
import { Link } from "react-router-dom"

export const Setting = () => {
  return (
    <SettingContainer>
    <Header 
      leftIcon={
      <StyledIcon>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="설정">
    </Header>
    <SettingListWrap>
        <Link {...NAVIGATION_PATH.navigatorSettingPasswordPage}><SettingPassword /></Link>
        <Link {...NAVIGATION_PATH.navigatorSettingAlarmPage}><SettingAlarm /></Link>
        <Link {...NAVIGATION_PATH.navigatorSettingManagePage}><SettingManagement /></Link>
        <Link {...NAVIGATION_PATH.navigatorSettingNoticePage}><SettingNotice /></Link>
        <Link {...NAVIGATION_PATH.navigatorSettingServicePage}><SettingService /></Link>
    </SettingListWrap>
    <SettingVersion />
</SettingContainer>
  )
}


const SettingContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
`

const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};

`

const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
`