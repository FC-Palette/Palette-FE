import { SETTING_CHANGE_PASSWORD_TEXT } from "@/constants"
import styled from "styled-components"

export const SettingChangePwd = () => {
  return (
    <ChangePasswordArea>
      <>{SETTING_CHANGE_PASSWORD_TEXT.CURRENT_PASSWORD_LABEL}</>
      <>{SETTING_CHANGE_PASSWORD_TEXT.NEW_PASSWORD_LABEL}</>
    </ChangePasswordArea>
  )
}


const ChangePasswordArea = styled.div`
  display: flex;
  flex-direction: column;
`