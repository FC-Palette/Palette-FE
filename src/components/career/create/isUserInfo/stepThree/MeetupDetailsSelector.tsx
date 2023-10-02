// 모임 장소, 요일, 모임 시간, 진행 시간 선택 컴포넌트
import styled from 'styled-components'
import { dayList, timeSliderMarks } from '@/constants'
import { CommonTimePicker } from '@/components'
import Slider from '@mui/material/Slider'
import { useRecoilState } from 'recoil'
import { careerCreateGlobalState } from '@/recoil'
import { useState } from 'react'

interface selectProps {
  $isSelected: boolean | string
}

export const MeetupDetailsSelector = () => {
  const [globalState, setGlobalState] = useRecoilState(careerCreateGlobalState)
  const { onOff, days, week } = globalState
  const [periodicMeeting, setPeriodicMeeting] = useState(false)

  const handleToggleOnline = (isOnline: boolean) => {
    setGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      onOff: isOnline
    }))
  }

  const handleToggle = (value, key) => {
    setGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      [key]: value
    }))
  }

  const toggleDaySelection = day => {
    if (days.includes(day)) {
      handleToggle(
        globalState.days.filter(selectedDay => selectedDay !== day),
        'days'
      )
    } else {
      handleToggle([...globalState.days, day], 'days')
    }
  }

  const handleTogglePeriodicMeeting = () => {
    setPeriodicMeeting(!periodicMeeting)
  }

  // 요일 리스트
  const daysItems = dayList.dayOfTheWeek.map(item => (
    <Answer
      key={item}
      onClick={() => toggleDaySelection(item)}
      $isSelected={days.includes(item)}
      className={days.includes(item) ? 'selected' : ''}>
      {item}
    </Answer>
  ))

  return (
    <>
      {/* 모임 장소 */}
      <ToggleNTextWrap>
        <QuestionTitle>모임 장소를 어디로 할까요?</QuestionTitle>
        <ToggleRowSortContainerTwo>
          <ToggleL
            onClick={() => handleToggleOnline(!onOff)}
            $isSelected={!onOff}>
            온라인
          </ToggleL>
          <ToggleR
            onClick={() => handleToggleOnline(!onOff)}
            $isSelected={onOff}>
            오프라인
          </ToggleR>
        </ToggleRowSortContainerTwo>
      </ToggleNTextWrap>
      <InputContainer>
        <InputText
          maxLength={30}
          onChange={e => handleToggle(e.target.value, 'place')}
          placeholder={
            onOff ? '텍스트를 입력하세요' : '오프라인 선택시 활성화됩니다.'
          }
          disabled={!onOff}
          style={{
            background: onOff ? 'inherit' : '#F5F6FA',
            color: onOff ? 'inherit' : '#F5F6FA'
          }}
        />
      </InputContainer>

      {/* 주기 체크 */}
      <PeriodicCheckBoxContainer>
        <PeriodicCheckBox
          type="checkbox"
          onClick={handleTogglePeriodicMeeting}
        />
        <PeriodicCheckBoxText>주기적으로 모이시겠어요?</PeriodicCheckBoxText>
      </PeriodicCheckBoxContainer>

      {periodicMeeting && (
        <>
          <ToggleNTextWrap>
            <QuestionTitle>모임 요일을 정해주세요.</QuestionTitle>
            <ToggleRowSortContainerThree>
              <ToggleL60
                onClick={() => handleToggle('매주', 'week')}
                $isSelected={week === '매주'}>
                매주
              </ToggleL60>
              <ToggleM60
                onClick={() => handleToggle('격주', 'week')}
                $isSelected={week === '격주'}>
                격주
              </ToggleM60>
              <ToggleR60
                onClick={() => handleToggle('매달', 'week')}
                $isSelected={week === '매달'}>
                매달
              </ToggleR60>
            </ToggleRowSortContainerThree>
          </ToggleNTextWrap>
          <AnswerFlexWrap>{daysItems}</AnswerFlexWrap>

          {/* 모임시간 */}
          <TimePickerContainer>
            <QuestionTitle>모임 시간을 정해주세요.</QuestionTitle>
            {/* <CommonTimePicker onTimeChange={handleMeetingTime} /> */}
            <CommonTimePicker
              onTimeChange={time => handleToggle(time, 'time')}
            />
          </TimePickerContainer>

          {/* 진행시간 */}
          <QuestionTitle>진행시간은 얼마나 될까요?</QuestionTitle>
          <Slider
            sx={{ width: '85%', margin: '0 auto' }}
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
                handleToggle(value.toString(), 'progressTime')
              }
            }}
          />
        </>
      )}
    </>
  )
}
const QuestionTitle = styled.div`
  margin-top: 7%;
  margin-left: 5.7%;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
  white-space: nowrap;
`

// 토글 텍스트 래퍼 (Row)
const ToggleNTextWrap = styled.div`
  /* width: 100%; */
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`
// 토글 래퍼 (Row)
const ToggleRowSortContainerTwo = styled.div`
  margin: 7% 5.7% 0;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  white-space: nowrap;
`

const ToggleRowSortContainerThree = styled.div`
  width: 100%;
  margin: 7% 5.7% 0;
  display: flex;
  text-align: center;
  align-items: center;
  white-space: nowrap;
`

const ToggleL = styled.div<selectProps>`
  width: 10px;
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
  width: 10px;
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
  margin: 0 5.7%;
  width: 88%;
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
  margin: 7% 5.7% 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
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
  margin: 0 24px;
  width: 88%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  cursor: pointer;
  min-width: 120px;
`

const ToggleL60 = styled.div<selectProps>`
  width: 10px;
  /* width: 60px; */
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 8px 0 0 8px;
  border-right: 1px solid ${props => props.theme.greyScale.grey2};
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
  /* width: 60px; */
  width: 10px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  flex: 1;
  padding: 6px 20px;
  border-right: 1px solid ${props => props.theme.greyScale.grey2};
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
  width: 10px;
  /* width: 60px; */
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

const TimePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
