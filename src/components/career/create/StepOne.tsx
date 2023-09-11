import styled from 'styled-components'
import { profileNCareerFilter } from '@/constants'
import { useState } from 'react'
import { Button, iconMapping } from 'components/common'

interface AnswerProps {
  $isSelected: boolean
  onClick: () => void
}

interface InputState {
  typeOne: string
  typeTwo: string
  meetingJopType: string
  rank: string
  male: string
}
export const StepOne = () => {
  const [inputState, setInputState] = useState<InputState>({
    // 모임 종류 [커리어, 근력, 자산]
    typeOne: '',
    // 모임 종류 [스터디, 플젝, 친목]
    typeTwo: '',
    // 모임 종류 [경영, 개발, 기획 등]
    meetingJopType: '',
    // 직급 [인턴, 사원 등]
    rank: '',
    // 성별
    male: ''
  })

  const [isSelected, setIsSelected] = useState({
    typeOne: '',
    typeTwo: '',
    meetingJopType: '',
    rank: '',
    male: ''
  })

  const handleAnswerClick = (item: string, questionKey: string) => {
    setInputState(prev => ({
      ...prev,
      [questionKey]: item
    }))
    setIsSelected(prev => ({
      ...prev,
      [questionKey]: item
    }))
  }

  const isAnswerSelected = (item: string, questionKey: string) => {
    return isSelected[questionKey] === item
  }

  const AnswerList1 = profileNCareerFilter.typeOne.map(item => (
    <Answer
      key={item}
      $isSelected={isAnswerSelected(item, 'typeOne')}
      onClick={() => handleAnswerClick(item, 'typeOne')}>
      {item}
    </Answer>
  ))

  const AnswerList2 = profileNCareerFilter.typeTwo.map(item => (
    <Answer
      key={item}
      $isSelected={isAnswerSelected(item, 'typeTwo')}
      onClick={() => handleAnswerClick(item, 'typeTwo')}>
      {item}
    </Answer>
  ))

  const AnswerList3 = profileNCareerFilter.meetingJopType.map(item => (
    <Answer
      key={item}
      $isSelected={isAnswerSelected(item, 'meetingJopType')}
      onClick={() => handleAnswerClick(item, 'meetingJopType')}>
      <IconWrapper>{iconMapping[item]}</IconWrapper>
      {item}
    </Answer>
  ))

  const AnswerList4 = profileNCareerFilter.rank.map(item => (
    <Answer
      key={item}
      $isSelected={isAnswerSelected(item, 'rank')}
      onClick={() => handleAnswerClick(item, 'rank')}>
      {item}
    </Answer>
  ))

  const AnswerList5 = profileNCareerFilter.male.map(item => (
    <Answer
      key={item}
      $isSelected={isAnswerSelected(item, 'male')}
      onClick={() => handleAnswerClick(item, 'male')}>
      {item}
    </Answer>
  ))

  console.log(inputState)

  return (
    <Wrap>
      <QuestionContainer>
        <VerticalEmphasis />
        <Question>어떤 주제로 모임을 만드시겠어요</Question>
      </QuestionContainer>
      <AnswersContainer>{AnswerList1}</AnswersContainer>
      <QuestionContainer>
        <VerticalEmphasis />
        <Question>어떤 주제로 모임을 만드시겠어요</Question>
      </QuestionContainer>
      <AnswersContainer>{AnswerList2}</AnswersContainer>
      <QuestionContainer>
        <VerticalEmphasis />
        <Question>어떤 종류의 모임을 만드시겠어요?</Question>
      </QuestionContainer>
      <AnswerFlexWrap>{AnswerList3}</AnswerFlexWrap>
      <QuestionContainer>
        <VerticalEmphasis />
        <Question>원하시는 직급이 있으신가요?</Question>
      </QuestionContainer>
      <AnswerFlexWrap>{AnswerList4}</AnswerFlexWrap>
      <QuestionContainer>
        <VerticalEmphasis />
        <Question>원하시는 직급이 있으신가요?</Question>
      </QuestionContainer>
      <AnswersContainer>{AnswerList5}</AnswersContainer>
      <BtnWrap>
        <Button
          $btnWidth="382px"
          $btnHeight="60px"
          $fontSize="20px"
          $borderRadius="8px">
          다음
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
  /* left: 24px; */
  margin: 0 23px;
  gap: 8px;
`

// 질문 수평 컨테이너, 버티컬 바때문에 묶어주는 역할
const QuestionContainer = styled.div`
  display: flex; /* 수평 정렬을 위해 추가 */
  align-items: center; /* 세로 중앙 정렬을 위해 추가 */
  margin-top: 30px;
`
// 질문
const Question = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`
// 답변 수평 컨테이너, map 사용시 아이템 수직 정렬되서 사용
const AnswersContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
`

const Answer = styled.div<AnswerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  /* background-color: ${props => props.theme.subColor.blie10}; */
  background-color: ${props =>
    props.$isSelected
      ? props.theme.subColor.blie10
      : props.theme.subColor.blueGrey};
  color: ${props => (props.$isSelected ? props.theme.main.blue0 : '#000')};
  border-radius: 21px;
  padding: 12px;
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

// 버티컬 바 파란색
const VerticalEmphasis = styled.div`
  width: 4px;
  height: 26px;
  background-color: ${props => props.theme.main.blue0};
  border-radius: 8px;
  margin-right: 8px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  color: ${props => props.theme.main.blue0};
  width: 16px;
  height: 16px;
`
const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 40px 0 20px;
`
