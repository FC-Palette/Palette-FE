import { Button } from '@/components'
import styled from 'styled-components'
export const MeetingsPreviewFooter = ({
  handleCreateMeeting,
  handleCreateCancel
}) => {
  return (
    <Wrapper>
      <BtnWrap>
        <BtnWrap>
          <Button
            onClick={handleCreateCancel}
            $bgColor="#fff"
            $btnWidth="45%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            <BlueText>취소하기</BlueText>
          </Button>
          <Button
            onClick={handleCreateMeeting}
            $btnWidth="45%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            개설하기
          </Button>
        </BtnWrap>
      </BtnWrap>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  height: 100px;
  z-index: 10;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
  margin-top: 3%;
  min-height: 80px;
`

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  justify-content: space-evenly;
  display: flex;
  gap: 1%;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  color: ${props => props.theme.greyScale.grey3};
`

const BlueText = styled.span`
  color: ${props => props.theme.main.blue0};
`

