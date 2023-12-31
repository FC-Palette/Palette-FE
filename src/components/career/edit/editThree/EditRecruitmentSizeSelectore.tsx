import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { editDtoAtom } from '@/recoil'

export const EditRecruitmentSizeSelectore = () => {
  const setGlobalState = useSetRecoilState(editDtoAtom)

  const handleNumofMembers = (e: number) => {
    let count = e
    setGlobalState(prev => ({
      ...prev,
      headCount: count
    }))
  }
  return (
    <>
      <QuestionTitle>
        모집인원을 알려주세요. <span>*</span>
      </QuestionTitle>
      <InputContainer>
        <InputContents
          onChange={e => handleNumofMembers(+e.target.value)}
          placeholder="인원수를 적어주세요."
          type="number"
          min={0}
        />
      </InputContainer>
    </>
  )
}

const QuestionTitle = styled.div`
  margin: 7% 5.7% 0;

  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
  & > span {
    color: #ff5a5a;
  }
`

const InputContainer = styled.div`
  margin: 3% 5.7% 0;
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
