import React from 'react'
import { theme } from 'styles/index'
import { styled } from 'styled-components'

const TRADES_CLOSING_TEXT = [
  '마감 일시 도달 시 자동 마감',
  '마감 인원 도달 시 자동 마감'
]

export const ClosingDate = () => {
  return (
    <Wrapper>
      {TRADES_CLOSING_TEXT.map((text, index) => (
        <React.Fragment key={text}>
          <CheckBoxWrapper>
            <Label htmlFor={`radio${index}`}>
              <CustomCheckBox
                type="radio"
                id={`radio${index}`}
                name="closingOption"
              />
            </Label>
            <DetailText>{text}</DetailText>
          </CheckBoxWrapper>
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 6px;
  height: 30px;
  align-items: center;
`
const DetailText = styled.div`
  color: ${theme.greyScale.grey9};
  font-size: ${theme.customSize.large};
`
const Label = styled.label`
  width: 20px;
  height: 20px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

const CustomCheckBox = styled.input`
  width: 20px;
  height: 20px;
`
