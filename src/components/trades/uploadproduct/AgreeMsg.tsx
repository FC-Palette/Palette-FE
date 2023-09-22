import React, { useState } from 'react'
import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import {
  TRADES_DETAILTITLE_TEXT,
  TRADES_DETAIL_TEXT,
  TRADES_DETAILTITLE_TEXT2,
  TRADES_DETAIL_TEXT2
} from 'constants/trades/index'
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'

export const AgreeMsg1 = () => {
  const [showMsg, setShowMsg] = useState(false)

  const toggleMsg = () => {
    setShowMsg(!showMsg)
  }

  return (
    <>
      <Wrapper>
        <LabelTextWrapper>
          <LabelWrapper htmlFor="checkboxId">
            <Checkbox
              id="checkboxId"
              type="checkbox"
            />
          </LabelWrapper>
          <AgreeText>동의합니다.</AgreeText>
        </LabelTextWrapper>
        <AgreeWrapper onClick={toggleMsg}>
          <AgreeTitle>{TRADES_DETAILTITLE_TEXT}</AgreeTitle>
          <AgreeBtn>{showMsg ? <ArrowUp2 /> : <ArrowDown2 />}</AgreeBtn>
        </AgreeWrapper>
        {showMsg && (
          <AdditionalInfo>
            {TRADES_DETAIL_TEXT.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </AdditionalInfo>
        )}
      </Wrapper>
    </>
  )
}

export const AgreeMsg2 = () => {
  const [showMsg2, setShowMsg2] = useState(false)

  const toggleMsg = () => {
    setShowMsg2(!showMsg2)
  }

  return (
    <>
      <Wrapper1>
        <AgreeWrapper onClick={toggleMsg}>
          <AgreeTitle>{TRADES_DETAILTITLE_TEXT2}</AgreeTitle>
          <AgreeBtn>{showMsg2 ? <ArrowUp2 /> : <ArrowDown2 />}</AgreeBtn>
        </AgreeWrapper>
        {showMsg2 && (
          <AdditionalInfo2>
            {TRADES_DETAIL_TEXT2.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </AdditionalInfo2>
        )}
      </Wrapper1>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Wrapper1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
`

const LabelWrapper = styled.label`
  margin: 10px 0px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${theme.main.blue0};

  &:hover {
    cursor: pointer;
  }

  input[type='checkbox']:checked + & {
    background-color: ${theme.main.blue0};
  }
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  display: none;
`

const AgreeWrapper = styled.button`
  display: flex;
  width: 350px;
  height: 58px;
  background-color: ${theme.greyScale.grey1};
  color: ${theme.greyScale.grey7};
  align-items: center;
  font-size: ${theme.customSize.medium};
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border-radius: 8px 8px 0px 0px;
    border-bottom: 1px solid ${theme.greyScale.grey3};
  }
`

const AgreeText = styled.div`
  color: ${theme.greyScale.grey9};
  font-size: ${theme.customSize.large};
`

const LabelTextWrapper = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 24px;
`
const AgreeTitle = styled.div`
  padding-left: 14px;
`
const AgreeBtn = styled.div`
  padding-right: 24px;
`

const AdditionalInfo = styled.div`
  padding: 14px 20px 0px 20px;
  height: 268px;
  width: 350px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${theme.greyScale.grey1};
  color: ${theme.greyScale.grey7};
  font-size: ${theme.customSize.small};
  line-height: 17px;
`
const AdditionalInfo2 = styled.div`
  padding: 14px 20px 0px 20px;
  height: 248px;
  width: 350px;
  border-radius: 0px 0px 8px 8px;
  background-color: ${theme.greyScale.grey1};
  color: ${theme.greyScale.grey7};
  font-size: ${theme.customSize.small};
  line-height: 18px;
  padding-left: 20px;
  padding-top: 15px;
`
