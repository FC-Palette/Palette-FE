import { JOIN_MEETING_HEADER_TEXT } from '@/constants'
import styled from 'styled-components'

export const JoinMeetingStepCompleteTitle = () => {
  const { stepTwoCompleteTitle, stepTwoCompleSubTitle } =
    JOIN_MEETING_HEADER_TEXT

  return (
    <Container>
      <FetchTitle>[마케팅] 출근 전 트렌드 분석</FetchTitle>
      <CompleteTitle>
        {stepTwoCompleteTitle[0]} <br />
        {stepTwoCompleteTitle[1]}
      </CompleteTitle>
      <SubTitle>{stepTwoCompleSubTitle}</SubTitle>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const FetchTitle = styled.div`
  white-space: break-spaces;
  max-width: 382px;
  width: auto;
  margin: 144px 24px 0 24px;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`

const CompleteTitle = styled.div`
  color: ${props => props.theme.greyScale.grey9};
  margin: 8px 100px 0 24px;
  line-height: 50px;
  font-size: 48px;
  font-weight: 600;
`
const SubTitle = styled.div`
  margin: 12px 0 0 24px;
  color: ${props => props.theme.greyScale.grey5};
  line-height: 27px;
  font-size: 18px;
`
