import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  MeetupDetailsSelector,
  MemberApprovalMethodSelector,
  RecruitmentPeriodSelector,
  RecruitmentSizeSelector
} from '.'
import { CareerCreateMeetingCommonQuestion } from '../..'

export const StepThreeCard = () => {
  const navigate = useNavigate()

  return (
    <Wrap>
      <CareerCreateMeetingCommonQuestion>
        모임을 소개해주세요.
      </CareerCreateMeetingCommonQuestion>
      <SmallTitle>입력하신 내용은 추후 변경할 수 있어요</SmallTitle>

      {/* new 모집인원 */}
      <RecruitmentSizeSelector />

      {/* new 기간 설정 */}
      <RecruitmentPeriodSelector />

      {/* new 모임 장소, 요일, 시간, 진행시간 */}
      <MeetupDetailsSelector />

      {/* new 승인제   */}
      <MemberApprovalMethodSelector />

      <BtnWrap>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $borderRadius="8px"
          onClick={() => navigate('/createMeeting-preview')}>
          미리보기
        </Button>
      </BtnWrap>
    </Wrap>
  )
}

// 전체 랩
const Wrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px;
  gap: 8px;
`
const SmallTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.71;
  display: flex;
  align-items: center;
  height: 20px;
  margin-left: 10px;
  color: ${props => props.theme.greyScale.grey6};
`
const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 55px 0 32px;
  color: ${props => props.theme.greyScale.grey3};
`
