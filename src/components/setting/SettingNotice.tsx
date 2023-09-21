import { SETTING_MENU_TEXT } from "constants/index"
import { SettingBtnStyle } from "components/index"
import { styled } from "styled-components"
import { theme } from "styles/index"

export const SettingNotice = () => {
  return (
    <NoticeWrap>
      <BorderLine />
      <SettingBtnStyle
        text={SETTING_MENU_TEXT.settingNoticeText}>
      </SettingBtnStyle>
    </NoticeWrap>
  )
}

const NoticeWrap = styled.div`
`

const BorderLine = styled.div`
  margin: 0 24px;
  border: 0.5px solid ${theme.greyScale.grey2};
`