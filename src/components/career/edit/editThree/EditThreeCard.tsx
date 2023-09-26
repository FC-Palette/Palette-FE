import { StepProgressBar } from '@/components'
import styled from 'styled-components'

import {
  CareerCreateMeetingCommonQuestion,
  EditDetailsSelector,
  EditMemberApprovalMethodSelector,
  EditRecruitmentPeriodSelector,
  EditRecruitmentSizeSelectore
} from '../..'
import { useRecoilValue } from 'recoil'
import { careerEditGlobalState } from '@/recoil'
export const EditThreeCard = () => {
  const globalData = useRecoilValue(careerEditGlobalState)
  const log = console.log
  log(globalData)
  return (
    <>
      <StepProgressBar $currentPage={3} />

      <CareerCreateMeetingCommonQuestion>
        모임을 소개해주세요.
      </CareerCreateMeetingCommonQuestion>
      <SmallTitle>입력하신 내용은 추후 변경할 수 있어요</SmallTitle>

      <EditRecruitmentSizeSelectore />

      <QuestionTitle>기간을 설정해주세요.</QuestionTitle>
      <EditRecruitmentPeriodSelector />

      <EditDetailsSelector />

      <EditMemberApprovalMethodSelector />
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
