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

  const infos = (
    <InfoZone>
      {/* 모집기준 */}
      <Info>
        {'무관'} | {gender}
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
      <CareerCreateMeetingCommonQuestion>
        모임정보
      </CareerCreateMeetingCommonQuestion>

      <MainContainer>
        <ColumnContainer>{iconsAndTitles}</ColumnContainer>
        <ColumnContainer>{infos}</ColumnContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  margin: 2.5% 6.4% 3.5%;
  min-height: 375px;
  min-height: 214px;
  background-color: ${props => props.theme.subColor.blueGrey};
  border-radius: 8px;
  display: flex;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding: 4.5% 16px 4.5% 4.5%;
`
// left
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
  min-width: 80px;
`
// right
const Info = styled.div`
  font-size: 14px;
  height: 24px;
  line-height: 16.71px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const InfoZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit;
  color: ${props => props.theme.greyScale.grey9};
`
