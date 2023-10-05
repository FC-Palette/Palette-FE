import { JOIN_MEETING_HEADER_TEXT } from '@/constants'
import { reasonTextAtom } from '@/recoil'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

export const JoinMeetingStepTwoTextField = () => {
  const [prAtom, setPrAtom] = useRecoilState(reasonTextAtom)

  const maxTextLength = 300
  const placeHolder = JOIN_MEETING_HEADER_TEXT.stepTwoPlaceholder[0]

  const handleChipClick = (chipText: string) => {
    setPrAtom(prev => ({ ...prev, pr: chipText }))
  }

  const onChangeText = (e: any) => {
    const text = e.target.value
    setPrAtom(prev => ({ ...prev, pr: text }))
  }

  return (
    <>
      <TextAreaContainer>
        <TextAreaContents
          value={prAtom.pr}
          placeholder={placeHolder}
          onChange={onChangeText}
          maxLength={maxTextLength}
        />
      </TextAreaContainer>
      <TextAreaLengthWrap>
        {prAtom.pr.length}/{maxTextLength}
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
  margin: 5.7% 5.7% 0;
  max-width: 382px;
  width: auto;
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
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  color: ${props => props.theme.greyScale.grey6};
  font-family: 'Pretendard', sans-serif;
`

const TextAreaLengthWrap = styled.div`
  margin: 2px 24px 0;
  font-size: 12px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.greyScale.grey5};
`

const ChipsField = styled.div`
  width: 100%;
  max-width: 382px;
  display: flex;
  flex-wrap: wrap;
  margin: 9% 5.7% 10%;
  height: 150px;
  gap: 8px;
`

const Chip = styled.div`
  width: auto;
  flex-wrap: wrap;
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
