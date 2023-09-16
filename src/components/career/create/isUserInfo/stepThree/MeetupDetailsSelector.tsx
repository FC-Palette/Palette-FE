// 모임 장소, 요일, 모임 시간, 진행 시간 선택 컴포넌트
import { useState } from 'react'
import styled from 'styled-components'
import { days, timeSliderMarks } from '@/constants'
import { CommonTimePicker } from '@/components'
import Slider from '@mui/material/Slider'

interface selectProps {
  $isSelected: boolean | string
}

export const MeetupDetailsSelector = () => {
  // 온라인(f)인지 오프라인(t)인지
  const [onlineToggleState, setOnlineToggleState] = useState<boolean>(false)
  // 주기적인지 아닌지
  const [periodicMeeting, setPeriodicMeeting] = useState<boolean>(false)
  // 선택 요일들
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  // 매주 격주 매달
  const [meetingFrequency, setMeetingFrequency] = useState<string>('')
  //  모임 시간
  const [meetingTime, setMeetingTime] = useState<string>('')
  // 진행 시간
  const [progressTime, setProgressTime] = useState<string>('')

  // 온라인인지 오프라인인지
  const handleToggleOnline = (isOnline: boolean) => {
    setOnlineToggleState(isOnline)
  }
  // 주기적인지 아닌지
  const handleTogglePeriodicMeeting = () => {
    setPeriodicMeeting(!periodicMeeting)
    if (!periodicMeeting) {
      setOnlineToggleState(true)
    } else {
      setOnlineToggleState(false)
    }
  }
  // 선택 요일
  const toggleDaySelection = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }
  // 매주 격주 매달
  const handleToggleMeetingFrequency = (frequency: string) => {
    setMeetingFrequency(frequency)
  }

  const handleProgressTime = (time: string) => {
    setProgressTime(time)
  }

  // 요일 리스트
  const daysList = days.dayOfTheWeek.map(item => (
    <Answer
      key={item}
      onClick={() => toggleDaySelection(item)}
      $isSelected={selectedDays.includes(item)}
      className={selectedDays.includes(item) ? 'selected' : ''}>
      {item}
    </Answer>
  ))

  console.log(meetingTime)
  
  return (
    <>
      {/* 모임 장소 */}
      <ToggleNTextWrap>
        <QuestionTitle>모임 장소를 어디로 할까요?</QuestionTitle>
        <ToggleRowSortContainer>
          <ToggleL
            onClick={() => handleToggleOnline(!onlineToggleState)}
            $isSelected={!onlineToggleState}>
            온라인
          </ToggleL>
          <ToggleR
            onClick={() => handleToggleOnline(!onlineToggleState)}
            $isSelected={onlineToggleState}>
            오프라인
          </ToggleR>
        </ToggleRowSortContainer>
      </ToggleNTextWrap>
      <InputContainer>
        <InputText
          placeholder={
            onlineToggleState
              ? '텍스트를 입력하세요'
              : '오프라인 선택시 활성화됩니다.'
          }
          disabled={!onlineToggleState}
          style={{
            background: onlineToggleState ? 'inherit' : '#F5F6FA',
            color: onlineToggleState ? 'inherit' : '#F5F6FA'
          }}
        />
      </InputContainer>
      {/* 주기적인지 체크 */}
      <PeriodicCheckBoxContainer>
        <PeriodicCheckBox
          type="checkbox"
          onClick={() => handleTogglePeriodicMeeting()}
        />
        <PeriodicCheckBoxText>주기적으로 모이시겠어요?</PeriodicCheckBoxText>
      </PeriodicCheckBoxContainer>

      {periodicMeeting && (
        <>
          <ToggleNTextWrap>
            <QuestionTitle>모임 요일을 정해주세요</QuestionTitle>
            <ToggleRowSortContainer>
              <ToggleL60
                onClick={() => handleToggleMeetingFrequency('weekly')}
                $isSelected={meetingFrequency === 'weekly'}>
                매주
              </ToggleL60>
              <ToggleM60
                onClick={() => handleToggleMeetingFrequency('biweekly')}
                $isSelected={meetingFrequency === 'biweekly'}>
                격주
              </ToggleM60>
              <ToggleR60
                onClick={() => handleToggleMeetingFrequency('monthly')}
                $isSelected={meetingFrequency === 'monthly'}>
                매달
              </ToggleR60>
            </ToggleRowSortContainer>
          </ToggleNTextWrap>
          <AnswerFlexWrap>{daysList}</AnswerFlexWrap>

          {/* 모임시간 */}
          <QuestionTitle>모임 시간을 정해주세요</QuestionTitle>
          <CommonTimePicker onTimeChange={setMeetingTime}/>

          {/* 진행시간 */}
          <QuestionTitle>진행시간은 얼마나 될까요?</QuestionTitle>
          <Slider
            sx={{ width: 360, margin: '0 auto' }}
            aria-label="progress-time"
            size="medium"
            defaultValue={30}
            valueLabelDisplay="auto"
            marks={timeSliderMarks}
            step={10}
            min={30}
            max={180}
            onChange={(_, value) => {
              if (typeof value === 'number') {
                handleProgressTime(value.toString())
              }
            }}
          />
        </>
      )}
    </>
  )
}
const QuestionTitle = styled.div`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`

// 토글 텍스트 래퍼 (Row)
const ToggleNTextWrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
// 토글 래퍼 (Row)
const ToggleRowSortContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  white-space: nowrap;
  margin-top: 32px;
`

const ToggleL = styled.div<selectProps>`
  width: 68px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 8px 0 0 8px;
  padding: 6px 20px;
  flex: 1;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ToggleR = styled.div<selectProps>`
  width: 68px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 0 8px 8px 0;
  flex: 1;
  padding: 6px 20px;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

// Input
const InputContainer = styled.div`
  width: 382px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
`

const InputText = styled.input`
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  color: ${props => props.theme.greyScale.grey6};
`

// 주기 체크
const PeriodicCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 32px;
`
const PeriodicCheckBox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`
const PeriodicCheckBoxText = styled.div`
  font-size: 16px;
  line-height: 19.09px;
  color: ${props => props.theme.greyScale.grey9};
`

// 요일
const Answer = styled.div<selectProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 19.09px;
  font-size: 16px;
  border-radius: 21px;
  width: 42px;
  height: 42px;
  color: ${props => props.theme.greyScale.grey9};
  background-color: ${props => props.theme.subColor.blueGrey};
  cursor: pointer;

  &.selected {
    background-color: ${props => props.theme.main.blue0};
    color: ${props => props.theme.main.white};
  }
`
const AnswerFlexWrap = styled.div`
  width: 382px;
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  cursor: pointer;
  min-width: 120px;
`

const ToggleL60 = styled.div<selectProps>`
  width: 60px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 8px 0 0 8px;
  padding: 6px 20px;
  flex: 1;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ToggleM60 = styled.div<selectProps>`
  width: 60px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  flex: 1;
  padding: 6px 20px;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ToggleR60 = styled.div<selectProps>`
  width: 60px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 0 8px 8px 0;
  flex: 1;
  padding: 6px 20px;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
