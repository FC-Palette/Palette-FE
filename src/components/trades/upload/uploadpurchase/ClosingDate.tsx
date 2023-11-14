import React from 'react'
import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { useRecoilState } from 'recoil'
import { tradescreateglobalstate } from 'recoil/index'

const TRADES_CLOSING_OPTIONS = [
  { label: '마감 일자 도달 시 자동 마감', value: 'DATETIME' },
  { label: '마감 인원 도달 시 자동 마감', value: 'HEAD_COUNT' }
]

export const ClosingDate = () => {
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )

  const handleOptionChange = selectedOption => {
    setTradesGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      closingType: selectedOption
    }))
  }

  return (
    <Wrapper>
      {TRADES_CLOSING_OPTIONS.map(option => (
        <React.Fragment key={option.value}>
          <CheckBoxWrapper>
            <Label htmlFor={`radio${option.value}`}>
              <CustomCheckBox
                type="radio"
                id={`radio${option.value}`}
                name="closingOption"
                value={option.value}
                checked={tradesGlobalState.closingType === option.value}
                onChange={() => handleOptionChange(option.value)}
              />
            </Label>
            <DetailText>{option.label}</DetailText>
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
