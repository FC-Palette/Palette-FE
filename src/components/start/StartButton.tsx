import { theme } from "styles/index"
import { Link } from "react-router-dom"
import { Button } from "components/index"
import { styled } from "styled-components"
import { START_TEXTS } from "constants/index"
import { NAVIGATION_PATH } from "constants/index"


export const StartButton = () => {
  return (
    <StartButtonWrap>
      <Link {...NAVIGATION_PATH.navigatorSignUpPage}>
        <Button $bgColor={theme.main.white}
        color={theme.main.blue0}
        $btnWidth="382px">
        {START_TEXTS.startOfficenerText}
        </Button>
      </Link>
    </StartButtonWrap>
  )
}


const StartButtonWrap = styled.div`
  Button{
    max-width: 100%;
  }
`