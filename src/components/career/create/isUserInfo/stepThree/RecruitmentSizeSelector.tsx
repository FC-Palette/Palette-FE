// 모집인원 설정
import { useState } from 'react'
import styled from 'styled-components'

export const RecruitmentSizeSelector = () => {
  const [numOfMembers, setNumOfMembers] = useState(0)

  const handleNumofMembers = e => {
    setNumOfMembers(e.target.value)
  }
  console.log(numOfMembers)
  return (
    <>
      <QuestionTitle>
        모집인원을 알려주세요. <span>*</span>
      </QuestionTitle>
      <InputContainer>
        <InputContents
          onChange={e => handleNumofMembers(e)}
          placeholder="인원수를 적어주세요."
          type="number"
          min={0}
        />
      </InputContainer>
    </>
  )
}

// Title
const QuestionTitle = styled.div`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
  & > span {
    color: #ff5a5a;
  }
`

const InputContainer = styled.div`
  margin-top: 8px;
  width: 382px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
`

const InputContents = styled.input`
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  color: ${props => props.theme.greyScale.grey6};
`
