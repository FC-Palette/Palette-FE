import { NAVIGATION_PATH, SETTING_MENU_TEXT } from "constants/index"
import { SettingBtnStyle } from "components/index"
import styled from "styled-components"
import { theme } from "styles/index"
import { Link } from "react-router-dom"

export const SettingMenuList = () => {
  return (
    <>
    <Link {...NAVIGATION_PATH.navigatorSettingPasswordPage}>
      <SettingBtnStyle
      text={SETTING_MENU_TEXT.settingChangePwdText}>
      </SettingBtnStyle>
    </Link>
    <Link {...NAVIGATION_PATH.navigatorSettingAlarmPage}>
      <SettingBtnStyle
        text={SETTING_MENU_TEXT.settingAlarmText}>
      </SettingBtnStyle>
    </Link>
    <ManageWrap>
        <SettingBtnStyle
          text={SETTING_MENU_TEXT.settingManagementText}>
        </SettingBtnStyle>
    </ManageWrap>
    <NoticeWrap>
      <BorderLine />
      <Link {...NAVIGATION_PATH.navigatorSettingNoticePage}>
        <SettingBtnStyle
          text={SETTING_MENU_TEXT.settingNoticeText}>
        </SettingBtnStyle>
      </Link>
    </NoticeWrap>
    <Link {...NAVIGATION_PATH.navigatorSettingServicePage}>
      <SettingBtnStyle
        text={SETTING_MENU_TEXT.settingServiceText}>
      </SettingBtnStyle>
    </Link>
    <SettingVersionWrap>
        {SETTING_MENU_TEXT.settingVersionText}
    </SettingVersionWrap>
    </>
  )
}

const NoticeWrap = styled.div`
`

const BorderLine = styled.div`
  margin: 0 24px;
  border: 1px solid ${theme.greyScale.grey2};
`


const SettingVersionWrap = styled.div`
    text-align: right;
    font-size: 12px;
    padding-right: 25.5px;
`

const ManageWrap = styled.div`
    button{
      cursor: not-allowed
      };
`