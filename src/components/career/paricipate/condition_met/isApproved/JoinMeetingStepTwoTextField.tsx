import { JOIN_MEETING_HEADER_TEXT } from '@/constants'
import { useState } from 'react'
import styled from 'styled-components'

export const JoinMeetingStepTwoTextField = () => {
  const [textContent, setTextContent] = useState('')
  const [textLength, setTextLength] = useState('')
  const maxTextLength = 300

  const placeHolder = JOIN_MEETING_HEADER_TEXT.stepTwoPlaceholder[0]

  const handleChipClick = (chipText: string) => {
    setTextContent(chipText)
  }

  const onChangeText = e => {
    const text = e.target.value
    setTextContent(text)
    setTextLength(text)
  }

  console.log(textContent)

  return (
    <>
      <TextAreaContainer>
        <TextAreaContents
          value={textContent}
          placeholder={placeHolder}
          onChange={onChangeText}
          maxLength={maxTextLength}
        />
      </TextAreaContainer>
      <TextAreaLengthWrap>
        {textLength.length || textContent.length}/{maxTextLength}
      </TextAreaLengthWrap>
      <ChipsField>
        {JOIN_MEETING_HEADER_TEXT.stepTwoChips.map((chipText, index) => (
          <Chip
            key={index}
            onClick={() => handleChipClick(chipText)}>
            {chipText}
          </Chip>
        ))}
      </ChipsField>
    </>
  )
}

const TextAreaContainer = styled.div`
  margin: 24px 24px 0;
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
  margin: 2px 24px 0;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`
const ChipsField = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 33px 24px 0;
  height: 150px;
  gap: 8px;
`

const Chip = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  color: ${props => props.theme.main.black};
  background-color: ${props => props.theme.subColor.blueGrey};
  font-size: 14px;
  line-height: 16.71px;
  padding: 12px;
  border-radius: 21px;
  cursor: pointer;
`
