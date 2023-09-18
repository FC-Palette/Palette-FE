import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { CareerCreateGlobalState } from '../..'

export const MeetupTitleAndDescription = () => {
  const [globalState, setGlobalState] = useRecoilState(CareerCreateGlobalState)
  const { meetupTitle, meetupDescription } = globalState

  const maxTitleLength = 25
  const maxDescriptionLength = 500

  const handleTitleChange = e => {
    const text = e.target.value
    if (text.length <= maxDescriptionLength) {
      setGlobalState(prev => ({
        ...prev,
        meetupTitle: text
      }))
    }
  }

  const handleDescriptionChange = e => {
    const text = e.target.value
    if (text.length <= maxDescriptionLength) {
      setGlobalState(prev => ({
        ...prev,
        meetupDescription: text
      }))
    }
  }

  return (
    <>
      <QuestionTitle>
        제목을 입력해주세요. <Asterrisk>*</Asterrisk>
      </QuestionTitle>

      <InputContainer>
        <InputContents
          placeholder="제목을 입력하세요"
          onChange={handleTitleChange}
          maxLength={maxTitleLength}
        />
      </InputContainer>
      <InputLength>
        {meetupTitle.length}/{maxTitleLength}
      </InputLength>
      <QuestionDescription>모임 소개글을 입력해주세요.</QuestionDescription>
      <TextAreaContainer>
        <TextAreaContents
          placeholder="텍스트를 입력하세요"
          onChange={handleDescriptionChange}
          maxLength={maxDescriptionLength}
        />
      </TextAreaContainer>
      <TextAreaLengthWrap>
        {meetupDescription.length}/{maxDescriptionLength}
      </TextAreaLengthWrap>
    </>
  )
}

// Title
const QuestionTitle = styled.div`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`

const Asterrisk = styled.span`
  color: #ff5a5a;
`

const InputContainer = styled.div`
  margin-top: 8px;
  width: 382px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey4};
`

const InputContents = styled.input`
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
const InputLength = styled.div`
  margin-top: 2px;
  font-size: 12px;
  margin-left: 345px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`

// Description
const QuestionDescription = styled.div`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`
const TextAreaContainer = styled.div`
  margin-top: 8px;
  width: 382px;
  height: 209px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey4};
`

const TextAreaContents = styled.textarea`
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
  font-family: 'Pretendard', sans-serif;
  &:focus {
    border: none;
    border-color: transparent;
  }
`

const TextAreaLengthWrap = styled.div`
  margin-top: 2px;
  font-size: 12px;
  margin-left: 335px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`
