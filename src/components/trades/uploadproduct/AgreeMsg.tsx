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

interface AgreeWrapperProps {
  showMsg: boolean
}

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
        <AgreeWrapper
          onClick={toggleMsg}
          showMsg={showMsg}>
          <AgreeTitle>{TRADES_DETAILTITLE_TEXT}</AgreeTitle>
          <AgreeBtn>{showMsg ? <ArrowUp2 /> : <ArrowDown2 />}</AgreeBtn>
        </AgreeWrapper>
        {showMsg && (
          <AdditionalInfo showMsg={showMsg}>
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
  const [showMsg, setShowMsg] = useState(false)

  const toggleMsg = () => {
    setShowMsg(!showMsg)
  }

  return (
    <>
      <Wrapper1>
        <AgreeWrapper
          onClick={toggleMsg}
          showMsg={showMsg}>
          <AgreeTitle>{TRADES_DETAILTITLE_TEXT2}</AgreeTitle>
          <AgreeBtn>{showMsg ? <ArrowUp2 /> : <ArrowDown2 />}</AgreeBtn>
        </AgreeWrapper>
        {showMsg && (
          <AdditionalInfo2 showMsg={showMsg}>
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
  margin-top: -40px;
`

const LabelWrapper = styled.label`
  margin: 10px 0px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid ${theme.main.blue0};
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  display: none;
`

const AgreeWrapper = styled.button<AgreeWrapperProps>`
  display: flex;
  width: 350px;
  height: 58px;
  background-color: ${theme.greyScale.grey1};
  color: ${theme.greyScale.grey7};
  align-items: center;
  font-size: ${theme.customSize.medium};
  justify-content: space-between;
  border-radius: ${props => (props.showMsg ? `8px 8px 0px 0px` : '8px')};
  border-bottom: ${props =>
    props.showMsg ? `1px solid ${theme.greyScale.grey2};` : 'none'};
  cursor: pointer;
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

const AdditionalInfo = styled.div<AgreeWrapperProps>`
  padding: 14px 12px 0px 12px;
  height: 268px;
  width: 350px;
  border-radius: ${props => (props.showMsg ? `0px 0px 8px 8px` : '8px')};
  background-color: ${theme.greyScale.grey1};
  color: ${theme.greyScale.grey7};
  font-size: ${theme.customSize.small};
  line-height: 17px;
`
const AdditionalInfo2 = styled.div<AgreeWrapperProps>`
  padding: 14px 12px 0px 12px;
  height: 248px;
  width: 350px;
  border-radius: ${props => (props.showMsg ? `0px 0px 8px 8px` : '8px')};
  background-color: ${theme.greyScale.grey1};
  color: ${theme.greyScale.grey7};
  font-size: ${theme.customSize.small};
  line-height: 18px;
  padding-left: 20px;
  padding-top: 15px;
`
