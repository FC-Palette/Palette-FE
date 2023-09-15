import { Button } from '@/components'
import { days } from '@/constants'
import { useState } from 'react'
import styled from 'styled-components'

interface selectProps {
  $isSelected: boolean | string
  onClick: () => void
}

export const StepThree = () => {
  // TOGGLE STATE
  const [onlineToggleState, setOnlineToggleState] = useState(false)
  const [meetingFrequency, setMeetingFrequency] = useState('')
  const [isApprove, setIsApprove] = useState(false)
  const [periodicMeeting, setPeriodicMeeting] = useState(false)
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const handleToggleOnline = (isOnline: boolean) => {
    setOnlineToggleState(isOnline)
  }
  const handleToggleMeetingFrequency = (frequency: string) => {
    setMeetingFrequency(frequency)
  }

  const handleToggleApprovalType = (type: boolean) => {
    setIsApprove(type)
  }

  const handleTogglePeriodicMeeting = () => {
    setPeriodicMeeting(!periodicMeeting)
    if (!periodicMeeting) {
      setOnlineToggleState(true)
    } else {
      setOnlineToggleState(false)
    }
  }

  const toggleDaySelection = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }

  console.log(onlineToggleState)
  console.log(selectedDays)

  const daysList = days.dayOfTheWeek.map(item => (
    <Answer
      key={item}
      onClick={() => toggleDaySelection(item)}
      $isSelected={selectedDays.includes(item)}
      className={selectedDays.includes(item) ? 'selected' : ''}>
      {item}
    </Answer>
  ))

  return (
    <Wrap>
      <QuestionContainer>
        <VerticalEmphasis />
        <QuestionTitleBig>모임을 소개해주세요.</QuestionTitleBig>
      </QuestionContainer>
      <QuestionTitleBigDown>
        입력하신 내용은 추후 변경할 수 있어요
      </QuestionTitleBigDown>

      {/* 모집 인원 */}
      <QuestionTitleSmall>
        모집인원을 알려주세요. <Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <InputWrapSmall>
        <InputText
          placeholder="인원수를 적어주세요"
          type="number"
        />
      </InputWrapSmall>

      {/* 기간 설정 */}
      <QuestionTitleSmall>
        기간을 설정해주세요. <Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <InputWrapSmall>
        <InputText type="date" />
      </InputWrapSmall>

      {/* 모임 장소  */}
      <ToggleNTextWrap>
        <QuestionTitleSmall>
          모임장소를 어디로 할까요? <Asterrisk>*</Asterrisk>
        </QuestionTitleSmall>
        <ToggleRowSortContainer>
          <ToggleL
            onClick={() => handleToggleOnline(true)}
            $isSelected={onlineToggleState}>
            온라인
          </ToggleL>
          <ToggleR
            onClick={() => handleToggleOnline(false)}
            $isSelected={!onlineToggleState}>
            오프라인
          </ToggleR>
        </ToggleRowSortContainer>
      </ToggleNTextWrap>
      <InputWrapSmall>
        <InputText
          placeholder="텍스트를 입력하세요"
          disabled={!onlineToggleState}
          style={{
            background: onlineToggleState ? 'inherit' : '#F5F6FA',
            color: onlineToggleState ? 'inherit' : '#F5F6FA'
          }}
        />
      </InputWrapSmall>

      {/* 주기 체크 , 주기 체크 클릭시 온라인, 오프라인 모두 체크되어야함 */}
      <PeriodicMeetingChecWrap>
        <PeriodicMeetingCheckBox
          type="checkbox"
          onClick={() => handleTogglePeriodicMeeting()}
        />
        <PeriodicMeetingCheckText>
          주기적으로 모이시겠어요?
        </PeriodicMeetingCheckText>
      </PeriodicMeetingChecWrap>

      {/* 모임 요일 */}
      <ToggleNTextWrap>
        <QuestionTitleSmall>
          모임 요일을 정해주세요. <Asterrisk>*</Asterrisk>
        </QuestionTitleSmall>
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

      {/* 모임 시간 */}
      <QuestionTitleSmall>
        모임 시간을 정해주세요.<Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <InputWrapSmall>
        <InputText
          placeholder="오전 11:00"
          type="text"
        />
      </InputWrapSmall>

      {/* 진행 시간 */}
      <QuestionTitleSmall>
        진행시간은 얼마나 될까요? <Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <InputText
        type="range"
        min={30}
        max={180}
      />

      <ToggleNTextWrap>
        <QuestionTitleSmall>멤버승인</QuestionTitleSmall>
        <ToggleRowSortContainer>
          <ToggleL
            onClick={() => handleToggleApprovalType(true)}
            $isSelected={isApprove}>
            승인제
          </ToggleL>
          <ToggleR
            onClick={() => handleToggleApprovalType(false)}
            $isSelected={!isApprove}>
            선착순
          </ToggleR>
        </ToggleRowSortContainer>
      </ToggleNTextWrap>
      <BtnWrap>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $borderRadius="8px">
          미리보기
        </Button>
      </BtnWrap>
    </Wrap>
  )
}

// 전체 랩
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  margin: 0 24px;
  gap: 8px;
`

// 질문 수평 컨테이너, 버티컬 바때문에 묶어주는 역할
const QuestionContainer = styled.div`
  display: flex; /* 수평 정렬을 위해 추가 */
  align-items: center; /* 세로 중앙 정렬을 위해 추가 */
  margin-top: 32px;
`
// 질문 텍스트 (대)
const QuestionTitleBig = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`
// 질문 텍스트 (소, 대 하위 텍스트)
const QuestionTitleBigDown = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.71;
  display: flex;
  align-items: center;
  height: 20px;
  margin-left: 10px;
  color: ${props => props.theme.greyScale.grey6};
`
// 질문 텍스트 (중)
const QuestionTitleSmall = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 21.48px;
  margin-top: 26px;
  color: ${props => props.theme.greyScale.grey6};
`
// 버티컬 바 파란색
const VerticalEmphasis = styled.span`
  width: 4px;
  height: 26px;
  background-color: ${props => props.theme.main.blue0};
  border-radius: 8px;
  margin-right: 8px;
`

// 인풋 래퍼
const InputWrapSmall = styled.div`
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

  &:focus {
    border: none;
    border-color: transparent;
  }

  background-color: transparent;
`
// 주기적 체크
const PeriodicMeetingChecWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 26px;
`
const PeriodicMeetingCheckText = styled.div`
  font-size: 16px;
  line-height: 19.09px;
  color: ${props => props.theme.greyScale.grey9};
`
const PeriodicMeetingCheckBox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`
const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 55px 0 32px;
  color: ${props => props.theme.greyScale.grey3};
`

const Asterrisk = styled.span`
  color: #ff5a5a;
`

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
    /* 선택된 요일의 스타일 */
    background-color: ${props => props.theme.main.blue0};
    color: ${props => props.theme.main.white};
  }
`
const AnswerFlexWrap = styled.div`
  width: 382px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  cursor: pointer;
  min-width: 120px; // 최소 너비 설정 (원하는 최소 너비로 조절)
`

// 토글 관련
const ToggleNTextWrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ToggleRowSortContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 26px;
  white-space: nowrap;
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
