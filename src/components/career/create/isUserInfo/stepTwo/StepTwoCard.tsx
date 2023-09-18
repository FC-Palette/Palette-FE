import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  CareerCreateMeetingCommonQuestion,
  MeetupImageSelector,
  MeetupTitleAndDescription
} from '../..'

export const StepTwoCard = () => {
  const navigate = useNavigate()

  return (
    <Wrap>
      {/* 소개 글 필드 */}
      <CareerCreateMeetingCommonQuestion>
        모임을 소개해주세요.
      </CareerCreateMeetingCommonQuestion>
      <QuestionSmall>입력하신 내용은 추후 변경할 수 있어요</QuestionSmall>

      <MeetupImageSelector />

      <MeetupTitleAndDescription />

      <BtnWrap onClick={() => navigate('/createMeeting-3')}>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          다음
        </Button>
      </BtnWrap>
    </Wrap>
  )
}
// 전체 랩
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin: 0 24px;
`

const QuestionSmall = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  height: 43px;
  width: auto;
  color: ${props => props.theme.greyScale.grey6};
  border-radius: 21px;
  padding: 12px;
  margin-top: -5px;
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 40px 0 20px;
  color: ${props => props.theme.greyScale.grey3};
`
