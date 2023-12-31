import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { careerCreateGlobalState } from '@/recoil'

export const MeetupTitleAndDescription = () => {
  const [globalState, setGlobalState] = useRecoilState(careerCreateGlobalState)
  const { title, description } = globalState

  const maxTitleLength = 25
  const maxDescriptionLength = 500

  const handleInputChange = (e: any, propertyKey: string) => {
    const text = e.target.value
    setGlobalState(prevText => ({
      ...prevText,
      [propertyKey]: text
    }))
  }

  return (
    <>
      <QuestionTitle>
        제목을 입력해주세요. <Asterrisk>*</Asterrisk>
      </QuestionTitle>

      <InputContainer>
        <InputContents
          value={title || ''}
          placeholder="제목을 입력하세요"
          onChange={e => handleInputChange(e, 'title')}
          maxLength={maxTitleLength}
        />
      </InputContainer>
      <InputLength>
        {title?.length}/{maxTitleLength}
      </InputLength>
      <QuestionDescription>모임 소개글을 입력해주세요.</QuestionDescription>
      <TextAreaContainer>
        <TextAreaContents
          value={description || ''}
          placeholder="텍스트를 입력하세요"
          onChange={e => handleInputChange(e, 'description')}
          maxLength={maxDescriptionLength}
        />
      </TextAreaContainer>
      <TextAreaLengthWrap>
        {description?.length}/{maxDescriptionLength}
      </TextAreaLengthWrap>
    </>
  )
}

const QuestionTitle = styled.div`
  margin-top: 7%;
  margin-bottom: 2%;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`

const Asterrisk = styled.span`
  color: #ff5a5a;
`

const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey4};

  &:focus-within {
    border-color: ${props => props.theme.main.blue0};
  }
`

const InputContents = styled.input`
  font-size: 16px;
  padding: 12px 16px;
  width: inherit;
  height: inherit;
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
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`

// Description
const QuestionDescription = styled.div`
  margin-top: 7%;
  margin-bottom: 2%;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`
const TextAreaContainer = styled.div`
  width: 100%;
  height: 209px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey4};

  &:focus-within {
    border-color: ${props => props.theme.main.blue0};
  }
`

const TextAreaContents = styled.textarea`
  font-size: 16px;
  padding: 12px 16px;
  width: inherit;
  height: inherit;
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
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`
