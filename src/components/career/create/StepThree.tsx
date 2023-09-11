import { Button } from '@/components'
import { days } from '@/constants'
import { useState } from 'react'
import styled from 'styled-components'

interface selectProps {
  $isSelected: boolean
  onClick: () => void
}

interface InputState {
  numOfPeople: number
  meetingPeriod: string
  meetingSpace: string
  periodicCheck: boolean
  days: string[]
  progressTime: string
  memberApproval: boolean
}

export const StepThree = () => {
  const [inputState, setInputState] = useState<InputState>({
    // 모집인원
    numOfPeople: 0,
    // 모임기간
    meetingPeriod: '',
    // 모임장소
    meetingSpace: '',
    // 주기적 모임 체크
    periodicCheck: false,
    // 모임 요일
    days: [],
    // 진행 시간
    progressTime: '',
    // 맴버 승인
    memberApproval: false
  })

  console.log(inputState)
  const [isSelected, setIsSelected] = useState({
    days: ''
  })

  const daysList = days.dayOfTheWeek.map(item => (
    <Answer key={item}>{item}</Answer>
  ))

  const isAnswerSelected = (item: string, questionKey: string) => {
    return isSelected[questionKey] === item
  }
  const handleToggleApproval = (isApproval: boolean) => {
    setInputState(prevState => ({
      ...prevState,
      memberApproval: isApproval
    }))
  }

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
      <QuestionTitleSmall>
        모임장소를 어디로 할까요? <Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <InputWrapSmall>
        <InputText placeholder="텍스트를 입력하세요" />
      </InputWrapSmall>

      {/* 주기 체크*/}
      <PeriodicMeetingChecWrap>
        <PeriodicMeetingCheckBox type="checkbox" />
        <PeriodicMeetingCheckText>
          주기적으로 모이시겠어요?
        </PeriodicMeetingCheckText>
      </PeriodicMeetingChecWrap>

      {/* 모임 요일 */}
      <QuestionTitleSmall>
        모임 요일을 정해주세요. <Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <AnswerFlexWrap>{daysList}</AnswerFlexWrap>

      {/* 진행 시간 */}
      <QuestionTitleSmall>
        진행시간은 얼마나 될까요? <Asterrisk>*</Asterrisk>
      </QuestionTitleSmall>
      <InputText
        type="range"
        min={30}
        max={180}
      />

      <RelatedToggleWrap>
        <QuestionTitleSmall>멤버승인</QuestionTitleSmall>
        <ToggleContainer>
          <ToggleButtonL
            onClick={() => handleToggleApproval(true)}
            $isSelected={inputState.memberApproval}>
            승인제
          </ToggleButtonL>
          <ToggleButtonR
            onClick={() => handleToggleApproval(false)}
            $isSelected={!inputState.memberApproval}>
            선착순
          </ToggleButtonR>
        </ToggleContainer>
      </RelatedToggleWrap>
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
  margin: 0 23px;
  gap: 8px;
`

// 질문 수평 컨테이너, 버티컬 바때문에 묶어주는 역할
const QuestionContainer = styled.div`
  display: flex; /* 수평 정렬을 위해 추가 */
  align-items: center; /* 세로 중앙 정렬을 위해 추가 */
  margin-top: 30px;
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
  margin-top: 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.48px;
  margin-top: 32px;
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
`
// 주기적 체크
const PeriodicMeetingChecWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 32px;
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
  margin: 40px 0 20px;
  color: ${props => props.theme.greyScale.grey3};
`

const Asterrisk = styled.span`
  color: #ff5a5a;
`

const Answer = styled.div`
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
`
const AnswerFlexWrap = styled.div`
  width: 382px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  cursor: pointer;
  min-width: 120px; // 최소 너비 설정 (원하는 최소 너비로 조절)
`
const RelatedToggleWrap = styled.div`
  display: flex;
  flex-direction: row;
`
const ToggleContainer = styled.div`
  display: flex;
`

const ToggleButtonL = styled.button<selectProps>`
  width: 69px;
  height: 29px;
  padding: 6px 20px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  flex: 1;

  padding: 10px;
  border: 1px solid ${props => (props.$isSelected ? '#0077FF' : '#CCCCCC')};
  background-color: ${props => (props.$isSelected ? '#0077FF' : 'transparent')};
  color: ${props => (props.$isSelected ? 'white' : '#333333')};
  cursor: pointer;
`
const ToggleButtonR = styled.button<selectProps>`
  width: 69px;
  height: 29px;
  padding: 6px 20px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  flex: 1;

  padding: 10px;
  border: 1px solid ${props => (props.$isSelected ? '#0077FF' : '#CCCCCC')};
  background-color: ${props => (props.$isSelected ? '#0077FF' : 'transparent')};
  color: ${props => (props.$isSelected ? 'white' : '#333333')};
  cursor: pointer;
`
