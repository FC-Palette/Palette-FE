import { SETTING_CHANGE_PASSWORD_TEXT } from "constants/index"
import { styled } from "styled-components"
import { Button, Input } from "components/index"

export const SettingChangePwd = () => {
  return (
    <ChangePasswordArea>
      <ExistingPwdWrap>
        <PwdTitle>
          {SETTING_CHANGE_PASSWORD_TEXT.currentPasswordLabel}
        </PwdTitle>
        <Input
          ph={SETTING_CHANGE_PASSWORD_TEXT.currentPasswordHint}
          type="password">
        </Input>
      </ExistingPwdWrap>
      <ChangePwdWrap>
        <PwdTitle>
          {SETTING_CHANGE_PASSWORD_TEXT.newPasswordLabel}
        </PwdTitle>
        <Input
          ph={SETTING_CHANGE_PASSWORD_TEXT.newPasswordPlaceholder}
          type="password"
        ></Input>
        <Input
          ph={SETTING_CHANGE_PASSWORD_TEXT.confirmNewPasswordLabel}
          type="password"
        >
        </Input>

        <Button>
          {SETTING_CHANGE_PASSWORD_TEXT.changeComplete}
        </Button>
      </ChangePwdWrap>
    </ChangePasswordArea>
  )
}


const ChangePasswordArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  Input{
    width: 100%;
    max-width: 430px;
    padding: 0 12px;
  }
`

const ExistingPwdWrap = styled.div`
  margin-bottom: 24px;
`

const ChangePwdWrap = styled.div`
  Input{
    margin-bottom: 4px;
  }
  Button{
    width: 100%;
  }
`

const PwdTitle = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`