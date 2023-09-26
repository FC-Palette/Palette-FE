import { Button } from "components/index"
import { theme } from "styles/index"
import { styled } from "styled-components"
import { PROFILE_EDIT_TEXT } from "constants/index"
import { Link } from "react-router-dom"


export const MyPageEditBtn = () => {
  return (
    <ButtonWrap>
      <Link to={"/changeprofile"}>
        <Button
        color={theme.main.blue0}
        $bgColor={theme.main.white}
        $btnWidth="382px"
        $btnHeight="60px">
          {PROFILE_EDIT_TEXT.profileEditBtnText}
        </Button>
      </Link>
    </ButtonWrap>
  )
}

const ButtonWrap = styled.div`
  margin-bottom: 20px;
  padding: 0 24px;
  max-width: 430px;
  Button{
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: ${theme.main.blueL1};
  }
`