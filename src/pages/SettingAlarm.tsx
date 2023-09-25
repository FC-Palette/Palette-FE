
import { Header, SettingAlarmBtn } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { SETTING_ALARM_TEXT } from "constants/index"
import { theme } from "styles/index"
import { useNavigate } from "react-router-dom"

export const SettingAlarm = () => {
  const navigate = useNavigate()
  return (
    <ServiceWrap>
      <Header 
      leftIcon={
      <StyledIcon onClick={() => navigate(-1)}>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="알림 설정">
      </Header>
      <SettingListWrap>
        <AllList>{SETTING_ALARM_TEXT.settingAlarmAllText}<SettingAlarmBtn id="button1" /></AllList>
        <AlarmList>{SETTING_ALARM_TEXT.settingAlarmNoticeText}<SettingAlarmBtn id="button2" /></AlarmList>
        <AlarmList>{SETTING_ALARM_TEXT.settingAlarmBuildingText}<SettingAlarmBtn id="button3" /></AlarmList>
        <AlarmList>{SETTING_ALARM_TEXT.settingAlarmReportText}<SettingAlarmBtn id="button4" /></AlarmList>
        <AlarmList>{SETTING_ALARM_TEXT.settingAlarmResearchText}<SettingAlarmBtn id="button5" /></AlarmList>
        <AlarmList>{SETTING_ALARM_TEXT.settingAlarmCheckText}<SettingAlarmBtn id="button6" /></AlarmList>
      </SettingListWrap>
    </ServiceWrap>
  )
}


const ServiceWrap = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
  max-width: 430px;
  svg{
    cursor: pointer;
  }
`


const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
  padding-left: 19px;
  padding-right: 28px;
`

const AllList = styled.div`
  font-size: 16px;
  padding: 13px 0;
  border-top: 1px solid ${theme.greyScale.grey5};
  border-bottom: 1px solid ${theme.greyScale.grey5};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AlarmList = styled.div`
  padding-top: 11px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
`

const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`