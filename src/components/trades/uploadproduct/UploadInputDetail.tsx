import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { tradescreateglobalstate } from 'recoil/index'

import { useRecoilState } from 'recoil'

const placeholderText =
  'TIP!\n수금은 어떻게 진행하실 건가요?\n어디서 상품을 나누실 건가요?\n왜 이상품을 공동구매 하시나요?'
const placeholderText1 =
  'TIP!\n거래는 어떻게 진행하실 건가요?\n어디서 상품을 나누실 건가요?\n왜 이상품을 중고거래 하시나요?'

export const UploadInputDetail = () => {
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )
  const { description } = tradesGlobalState

  const handleTextChange = e => {
    const text = e.target.value
    const maxDescriptionLength = 300
    if (text.length <= maxDescriptionLength) {
      setTradesGlobalState(prev => ({
        ...prev,
        description: text
      }))
    }
  }

  return (
    <Wrapper1>
      <InputWrapper>
        <TextArea
          placeholder={placeholderText}
          onChange={handleTextChange}
        />
      </InputWrapper>
      <TextCount>{description.length} / 300</TextCount>
    </Wrapper1>
  )
}

export const UploadInputDetail1 = () => {
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )
  const { description } = tradesGlobalState

  const handleTextChange = e => {
    const text = e.target.value
    const maxDescriptionLength = 300
    if (text.length <= maxDescriptionLength) {
      setTradesGlobalState(prev => ({
        ...prev,
        description: text
      }))
    }
  }

  return (
    <Wrapper>
      <InputWrapper>
        <TextArea
          placeholder={placeholderText1}
          onChange={handleTextChange}
        />
      </InputWrapper>
      <TextCount>{description.length} / 300</TextCount>
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

const Wrapper1 = styled.div`
  width: 100%;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: -20px;
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

const TextArea = styled.textarea`
  width: 350px;
  height: 180px;
  border: 2px solid ${theme.greyScale.grey3};
  border-radius: 8px;
  padding-left: 16px;
  padding-top: 12px;
  line-height: 20px;

  &:focus {
    border: 2px solid ${theme.greyScale.grey3};
  }
`
