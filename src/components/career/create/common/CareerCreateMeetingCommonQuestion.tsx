import React from 'react'
import styled from 'styled-components'

interface CommonQuestionProps {
  children: React.ReactNode
}

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

const QuestionText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${props => props.theme.greyScale.grey9};
`
const VerticalEmphasis = styled.div`
  width: 4px;
  height: 26px;
  background-color: ${props => props.theme.main.blue0};
  border-radius: 8px;
  margin-right: 8px;
`

export const CareerCreateMeetingCommonQuestion: React.FC<
  CommonQuestionProps
> = ({ children }) => {
  return (
    <QuestionContainer>
      <VerticalEmphasis />
      <QuestionText>{children}</QuestionText>
    </QuestionContainer>
  )
}
