import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Input } from 'components/common/index'
import React, { useState } from 'react'

const placeholderText =
  'TIP!\n수금은 어떻게 진행하실 건가요?\n어디서 상품을 나누실 건가요?\n왜 이상품을 공동구매 하시나요?'

export const UploadInputDetail = () => {
  const [text, setText] = useState('')

  const handleTextChange = e => {
    const newText = e.target.value

    if (newText.length <= 300) {
      setText(newText)
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          $inputWidth={'350px'}
          $inputHeight={'180px'}
          $borderColor={theme.greyScale.grey3}
          $borderRadius="8px"
          $paddingLeft="12px"
          placeholder={placeholderText}
          value={text}
          onChange={handleTextChange}
          ph={placeholderText}
        />
      </InputWrapper>
      <TextCount>{text.length} / 300</TextCount>
    </Wrapper>
  )
}
//
const Wrapper = styled.div`
  width: 100%;

  justify-content: center;
  margin-top: 8px;
  height: 209px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TextCount = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${theme.greyScale.grey5};
  font-size: ${theme.customSize.small};
  margin: 5px 5px 0px 0px;
`
