import { iconMapping } from '@/components'
import { MEETUP_SIMPLE_INFO, profileNCareerFilter } from '@/constants'
import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'

export const GetDetailMeetupInfo = () => {
  const fetchInfo = {
    isApproved: true, // 승인제
    selectedJopRank: profileNCareerFilter.rank, // 직급
    gender: profileNCareerFilter.male[2], // 성별
    recruitmentSize: 7, // 모집 인원수
    meetingFrequency: ['매주', '격주', '매달'][0],
    selectedDays: ['월', '화', '수', '목', '금', '토', '일'].splice(0, 3),
    progressTime: 60, // 진행시간 (분단위)
    meetingTime: '오전 08: 00', // 모임 시작 시간
    meetupStartDay: '2023-01-01',
    meetupEndDay: '2023-01-02'
  }

  const {
    isApproved,
    selectedJopRank,
    gender,
    recruitmentSize,
    meetingFrequency,
    selectedDays,
    progressTime,
    meetingTime,
    meetupStartDay,
    meetupEndDay
  } = fetchInfo

  // 아이콘 및 아이콘 맵핑 타이틀
  const iconsAndTitles = MEETUP_SIMPLE_INFO.map((iconKey, idx) => (
    <IconZone key={idx}>
      <Icon>{iconMapping[iconKey]}</Icon>
      <div>{iconKey}</div>
    </IconZone>
  ))

  const participationMethod = isApproved ? '승인제' : '선착순'

  const selectedRolesString = Array.isArray(selectedJopRank)
    ? selectedJopRank.join(', ')
    : selectedJopRank

  const infos = (
    <InfoZone>
      {/* 모집기준 */}
      <Info>
        {selectedRolesString} | {gender}
      </Info>
      {/* 모집인원 */}
      <Info>{recruitmentSize}명</Info>
      {/* 모집시간 */}
      <Info>
        {`${meetingFrequency} `} {selectedDays.join(', ')} {meetingTime}
        {progressTime ? ` / ${progressTime}분 진행` : ''}
      </Info>
      {/* 모집기간 */}
      <Info>
        {meetupStartDay} ~ {meetupEndDay}
      </Info>
      {/* 멤버승인 */}
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
      <ContentsFieldContainer>
        <ContentsFieldL>{iconsAndTitles}</ContentsFieldL>
        <ContentsFieldR>{infos}</ContentsFieldR>
      </ContentsFieldContainer>
    </>
  )
}

const TitleContainer = styled.div`
  width: 382px;
  margin: 0 24px 0;
`

const ContentsFieldContainer = styled.div`
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

const Info = styled.div`
  height: 24px;
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
