import { StepProgressBar } from '@/components'
import styled from 'styled-components'
import {
  MeetupDetailsSelector,
  MemberApprovalMethodSelector,
  RecruitmentPeriodSelector,
  RecruitmentSizeSelector
} from '.'
import {
  CareerCreateMeetingCommonQuestion,
  CareerCreateMeetingStaticHeader
} from '../..'

export const StepThreeCard = () => {
  return (
    <>
      <CareerCreateMeetingStaticHeader />
      <StepProgressBar $currentPage={3} />

      <CareerCreateMeetingCommonQuestion>
        모임을 소개해주세요.
      </CareerCreateMeetingCommonQuestion>
      <SmallTitle>입력하신 내용은 추후 변경할 수 있어요</SmallTitle>

      {/* 모집 인원 */}
      <RecruitmentSizeSelector />

      {/* 모집 기간 (Start ~ End) */}
      <QuestionTitle>기간을 설정해주세요.</QuestionTitle>
      <RecruitmentPeriodSelector />

      {/* 모임장소, 온,오프라인, 모임요일, 모임 주기, 모임시간, 진행시간 등 */}
      <MeetupDetailsSelector />

      {/* 모임 방식 체크 */}
      <MemberApprovalMethodSelector />
    </>
  )
}

const QuestionTitle = styled.div`
  margin: 7% 5.7% 1%;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`

const SmallTitle = styled.div`
  margin-left: 7%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.71;
  display: flex;
  align-items: center;
  height: 20px;
  color: ${props => props.theme.greyScale.grey6};
`
