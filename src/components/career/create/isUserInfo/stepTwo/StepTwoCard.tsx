import { StepProgressBar } from '@/components'
import styled from 'styled-components'
import {
  CareerCreateMeetingCommonQuestion,
  CareerCreateMeetingStaticHeader,
  MeetupImageSelector,
  MeetupTitleAndDescription
} from '../..'

export const StepTwoCard = () => {
  return (
    <>
      <CareerCreateMeetingStaticHeader />
      <StepProgressBar $currentPage={2} />
      <CareerCreateMeetingCommonQuestion>
        모임을 소개해주세요.
      </CareerCreateMeetingCommonQuestion>
      <Margin>
        <QuestionSmall>입력하신 내용은 추후 변경할 수 있어요</QuestionSmall>
        {/* 이미지 */}
        <Title>
          이미지를 등록 해주세요.<span>(최대 5장)</span>
        </Title>
        <MeetupImageSelector />

        <MeetupTitleAndDescription />
      </Margin>
    </>
  )
}

const Margin = styled.div`
  margin: 0 5.7%;
`

const QuestionSmall = styled.div`
  font-size: 14px;
  color: ${props => props.theme.greyScale.grey6};
  border-radius: 21px;
`

const Title = styled.div`
  margin-top: 7%;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};

  & > span {
    color: ${props => props.theme.greyScale.grey6};
    font-size: 14px;
    font-weight: 400;
  }
`
