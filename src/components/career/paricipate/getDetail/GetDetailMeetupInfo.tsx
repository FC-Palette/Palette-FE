import { iconMapping } from '@/components'
import { MEETUP_SIMPLE_INFO } from '@/constants'
import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { useRecoilValue } from 'recoil'
import { fetchDetailGlobalState } from '@/recoil'
import { useEffect } from 'react'

export const GetDetailMeetupInfo = () => {
  const atom = useRecoilValue(fetchDetailGlobalState)
  const {
    acceptType,
    sex,
    headCount,
    startDate,
    endDate,
    week,
    days,
    time,
    progressTime,
    positions
  } = atom

  useEffect(() => {}, [
    acceptType,
    sex,
    headCount,
    startDate,
    endDate,
    week,
    days,
    time,
    progressTime,
    positions
  ])
  // 아이콘 및 아이콘 맵핑 타이틀
  const iconsAndTitles = MEETUP_SIMPLE_INFO.map((iconKey, idx) => (
    <IconZone key={idx}>
      <Icon>{iconMapping[iconKey]}</Icon>
      <div>{iconKey}</div>
    </IconZone>
  ))

  const sliceDate = (date: string) => {
    return date.split('T')[0]
  }

  const participationMethod = acceptType

  const infos = (
    <InfoZone>
      {/* 모집기준 */}
      <Info>
        {sex} | {positions.join(' ')}
      </Info>
      {/* 모집인원 */}
      <Info>{headCount}명</Info>
      {/* 모집시간 */}
      <Info>
        {week ? `${week} ` : ''} {days ? days.join(',') : ''} {time ? time : ''}{' '}
        {progressTime ? `${progressTime}분 진행` : '-'}
      </Info>
      {/* 모집기간 */}
      <Info>
        {startDate && endDate
          ? `${sliceDate(startDate)} ~ ${sliceDate(endDate)}`
          : '-'}
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
