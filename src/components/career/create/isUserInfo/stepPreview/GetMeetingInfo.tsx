import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { iconMapping } from '@/components'

export const GetMeetingInfo = () => {
  const requiredIcons = [
    '모집기준',
    '모집인원',
    '모집시간',
    '모집기간',
    '멤버승인'
  ]
  const icons = requiredIcons.map((iconKey, idx) => (
    <IconZone key={iconKey}>
      <Icon>{iconMapping[iconKey]}</Icon>
      <div>{iconKey}</div>
    </IconZone>
  ))

  const infos = (
    <InfoZone>
      <Info>신입만 | 성별무관</Info>
      <Info>4/6명</Info>
      <Info>매주 월요일 오전 08:00 / 30분 진행</Info>
      <Info>2023.08.30 ~ 2013.09.30</Info>
      <Info>승인제</Info>
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
