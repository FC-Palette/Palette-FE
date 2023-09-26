import { JOIN_MEETING_HEADER_TEXT } from '@/constants'
import styled from 'styled-components'

export const JoinMeetingStepTwoTitle = () => {
  return (
    <>
      <MeetingTitle>{'모임 제목 받아와서 들어갈 필드'}</MeetingTitle>
      <ReasonTitle>{JOIN_MEETING_HEADER_TEXT.stepTwoTitle}</ReasonTitle>
    </>
  )
}

const MeetingTitle = styled.div`
  margin: 32px 0 0 24px;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.greyScale.grey9};
`
const ReasonTitle = styled.div`
  margin: 2px 30% 0 24px;
  color: ${props => props.theme.greyScale.grey9};
  font-size: 24px;
  font-weight: 500;
  line-height: 31.2px;
`
