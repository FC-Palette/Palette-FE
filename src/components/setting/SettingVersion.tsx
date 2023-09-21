import { SETTING_MENU_TEXT } from "constants/index"
import styled from "styled-components"


export const SettingVersion = () => {
  return (
    <SettingVersionWrap>
        {SETTING_MENU_TEXT.settingVersionText}
    </SettingVersionWrap>
  )
}


const SettingVersionWrap = styled.div`
    text-align: right;
    font-size: 12px;
    padding-right: 25.5px;
`