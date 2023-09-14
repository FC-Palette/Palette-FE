import { styled } from "styled-components"
import { Button } from "components/index"
import { START_MEET_TEXT } from "constants/index"

export const MyPagePostDisplay = () => {
  return (
    <DisplayArea>
      <DisplayWrap>
        <RequestText>
          {START_MEET_TEXT.startRequestText}
        </RequestText>
        <Button>        
          {START_MEET_TEXT.startMeetingBtnText}
        </Button>
      </DisplayWrap>
    </DisplayArea>
  )
}


const DisplayArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 375px;
  height: 282px;
`

const DisplayWrap = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  margin: auto; 
  height: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  Button{
    width: 300px;
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