import { styled } from "styled-components"
import { Button } from "components/index"
import { START_MEET_TEXT } from "constants/index"
import { Link } from "react-router-dom"

export const MyPagePostDisplay = () => {
  return (
    <DisplayArea>
      <DisplayWrap>
        <RequestText>
          {START_MEET_TEXT.startRequestText}
        </RequestText>
        <Link to={"/career"}>
          <Button>        
            {START_MEET_TEXT.startMeetingBtnText}
          </Button>
        </Link>
      </DisplayWrap>
    </DisplayArea>
  )
}


const DisplayArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 27.5px;
  max-width: 430px;
  height: 282px;
`

const DisplayWrap = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  margin-left: 42px;
  margin-right: 33px;
  height: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  Button{
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    margin-top: 12px;
    font-size: 20px;
  }
`



const RequestText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  white-space: pre-line;
`