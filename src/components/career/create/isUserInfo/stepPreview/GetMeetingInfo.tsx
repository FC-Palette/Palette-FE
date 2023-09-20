import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { iconMapping } from '@/components'
import { MEETUP_SIMPLE_INFO } from '@/constants'

export const GetMeetingInfo = ({
  selectedRoles,
  gender,
  recruitmentSize,
  meetingFrequency,
  selectedDays,
  meetingTime,
  progressTime,
  meetupStartDay,
  meetupEndDay,
  isApprove
}) => {
  const icons = MEETUP_SIMPLE_INFO.map((iconKey, idx) => (
    <IconZone key={idx}>
      <Icon>{iconMapping[iconKey]}</Icon>
      <div>{iconKey}</div>
    </IconZone>
  ))

  const participationMethod = isApprove ? '승인제' : '선착순'
  const selectedRolesString = Array.isArray(selectedRoles)
    ? selectedRoles.join(', ')
    : selectedRoles

  const infos = (
    <InfoZone>
      <Info>
        {selectedRolesString || '-'} | {gender}
      </Info>
      <Info>{recruitmentSize}명</Info>
      <Info>
        {meetingFrequency || '-'} {selectedDays ? `${selectedDays}` : ''}{' '}
        {meetingTime || ''} {progressTime ? `/ ${progressTime}분 진행` : ''}
      </Info>
      <Info>
        {meetupStartDay} ~ {meetupEndDay}
      </Info>
      <Info>{participationMethod}</Info>
    </InfoZone>
  )

  return (
    <>
      <TitleContainer>
        <CareerCreateMeetingCommonQuestion>
          모임정보
        </CareerCreateMeetingCommonQuestion>
      </TitleContainer>
      <ContentsFielContainer>
        <ContentsFieldL>{icons}</ContentsFieldL>
        <ContentsFieldR>{infos}</ContentsFieldR>
      </ContentsFielContainer>
    </>
  )
}

const TitleContainer = styled.div`
  width: 382px;
  margin: 0 24px 0;
`

const ContentsFielContainer = styled.div`
  display: flex;
`
const ContentsFieldL = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 120px;
  height: 214px;
  margin-top: 12px;
  padding: 19px 16px 19px 19px;
  background-color: ${props => props.theme.subColor.blueGrey};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 1;
`

const ContentsFieldR = styled.div`
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 262px;
  height: 214px;
  margin-top: 12px;
  padding: 19px 19px 19px 0;
  background-color: ${props => props.theme.subColor.blueGrey};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
`

const IconZone = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  line-height: 16.71px;
  width: 80px;
`

const InfoZone = styled.div`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  line-height: 16.71px;
  color: ${props => props.theme.greyScale.grey9};
`

const Info = styled.div`
  height: 24px;
`
