import { Button } from '@/components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const StepTwo = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('') // 제목 상태 변수
  const [description, setDescription] = useState('') // 모임 소개글 상태 변수

  const maxTitleLength = 25 // 제목 최대 길이
  const maxDescriptionLength = 500 // 모임 소개글 최대 길이

  const handleTitleChange = e => {
    const text = e.target.value
    if (text.length <= maxTitleLength) {
      setTitle(text)
    }
  }

  const handleDescriptionChange = e => {
    const text = e.target.value
    if (text.length <= maxDescriptionLength) {
      setDescription(text)
    }
  }

  return (
    <Wrap>
      {/* 소개 글 필드 */}
      <QuestionContainer>
        <VerticalEmphasis />
        <QuestionBig>모임을 소개해주세요.</QuestionBig>
      </QuestionContainer>
      <QuestionSmall>입력하신 내용은 추후 변경할 수 있어요</QuestionSmall>
      {/* 이미지 입력 필드 */}
      <DummyImage />
      {/* 하단 입력 필드 */}
      <QuestionBig>제목을 입력해주세요. *</QuestionBig>
      <InputWrapSmall>
        <InputText
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
          maxLength={maxTitleLength}
        />
      </InputWrapSmall>
      <InputLengthWrapSmall>
        {title.length}/{maxTitleLength}
      </InputLengthWrapSmall>
      <QuestionBig>모임 소개글을 입력해주세요.</QuestionBig>
      <InputWrapBig>
        <InputText
          placeholder="텍스트를 입력하세요"
          onChange={handleDescriptionChange}
          maxLength={maxDescriptionLength}
        />
      </InputWrapBig>
      <InputLengthWrapBig>
        {description.length}/{maxDescriptionLength}
      </InputLengthWrapBig>
      <BtnWrap onClick={() => navigate('/createMeeting-3')}>
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
const QuestionBig = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`
// 질문 텍스트 (소)
const QuestionSmall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  color: ${props => props.theme.greyScale.grey6};
  border-radius: 21px;
  padding: 12px;
`
// 버티컬 바 파란색
const VerticalEmphasis = styled.div`
  width: 4px;
  height: 26px;
  background-color: ${props => props.theme.main.blue0};
  border-radius: 8px;
  margin-right: 8px;
`
const DummyImage = styled.div`
  background-color: ${props => props.theme.greyScale.grey4};
  width: 90px;
  height: 90px;
  border-radius: 8px;
  margin: 30px 0;
`

// 인풋 래퍼
const InputWrapSmall = styled.div`
  margin-top: 10px;
  width: 382px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
`
const InputWrapBig = styled.div`
  width: 382px;
  height: 209px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
`
const InputText = styled.textarea`
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  height: 100%;
  resize: none;
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

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 40px 0 20px;
  color: ${props => props.theme.greyScale.grey3};
`

const InputLengthWrapSmall = styled.div`
  font-size: 12px;
  margin-left: 345px;
  line-height: 19px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`
const InputLengthWrapBig = styled.div`
  font-size: 12px;
  margin-left: 335px;
  line-height: 19px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`
