import { CareerCreateMeetingCommonQuestion } from 'components/career/create/index'
import styled from 'styled-components'
import { PREVIEW_ICON_INFO1 } from 'constants/trades/index'
import { Timer1 } from 'iconsax-react'

const iconMapping = {
  거래일자: <Timer1 />
}

export const SecondHandInfo = ({
  transactionStartTime,
  transactionEndTime,
  selectedDays
}) => {
  const startTimeComponents = transactionStartTime.split(':')

  const startHour = startTimeComponents[0]
  const startMinute = startTimeComponents[1]

  const endTimeComponents = transactionEndTime.split(':')
  const endHour = endTimeComponents[0]
  const endMinute = endTimeComponents[1]

  // 형식에 맞게 문자열을 조합합니다.
  const formattedStartTime = `${startHour}:${startMinute}`
  const formattedEndTime = `${endHour}:${endMinute}`
  // 요일 순서 배열
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']

  let selectedText
  let modifiedSelectedDays = [...selectedDays] // 복사본 생성

  if (modifiedSelectedDays.length === 0) {
    selectedText = '매일'
  } else if (
    modifiedSelectedDays.length === 7 &&
    modifiedSelectedDays.every(day =>
      ['월', '화', '수', '목', '금', '토', '일'].includes(day)
    )
  ) {
    selectedText = '매일'
  } else if (
    modifiedSelectedDays.length === 2 &&
    modifiedSelectedDays.includes('토') &&
    modifiedSelectedDays.includes('일')
  ) {
    selectedText = '주말'
  } else if (
    modifiedSelectedDays.length === 5 &&
    modifiedSelectedDays.every(day =>
      ['월', '화', '수', '목', '금'].includes(day)
    )
  ) {
    selectedText = '평일'
  } else {
    modifiedSelectedDays.sort(
      (a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b)
    )
    selectedText = modifiedSelectedDays.join(' ')
  }

  const icons = PREVIEW_ICON_INFO1.map((iconKey, idx) => (
    <IconZone key={idx}>
      <Icon>{iconMapping[iconKey]}</Icon>
      <div>{iconKey}</div>
    </IconZone>
  ))

  const infos = (
    <InfoZone>
      <Info>
        {selectedText} {formattedStartTime} ~ {formattedEndTime} 거래가능
      </Info>
    </InfoZone>
  )

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        모임정보
      </CareerCreateMeetingCommonQuestion>
      <ContentsFielContainer>
        <ContentsFieldL>{icons}</ContentsFieldL>
        <ContentsFieldR>{infos}</ContentsFieldR>
      </ContentsFielContainer>
    </>
  )
}

const ContentsFielContainer = styled.div`
  display: flex;
`
const ContentsFieldL = styled.div`
  margin-left: 5.7%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 120px;
  height: 62px;
  margin-top: 1.2%;
  padding: 19px 16px 19px 19px;
  background-color: ${props => props.theme.subColor.blueGrey};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

const ContentsFieldR = styled.div`
  margin-right: 5.7%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 262px;
  height: 62px;
  margin-top: 1.2%;
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
