// 모집인원 설정
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { careerCreateGlobalState } from '@/recoil'

export const RecruitmentSizeSelector = () => {
  const setGlobalState = useSetRecoilState(careerCreateGlobalState)
  const atomValue = useRecoilValue(careerCreateGlobalState)
  const { headCount } = atomValue

  const handleNumofMembers = (count: number) => {
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

      <TextNInputWrapper>
        <InputContainer>
          <InputContents
            value={headCount || ''}
            onChange={e => handleNumofMembers(+e.target.value)}
            placeholder="인원수를 적어주세요."
            type="number"
            min={0}
          />
        </InputContainer>
        <Text>명</Text>
      </TextNInputWrapper>
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

const TextNInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
const Text = styled.div`
  margin-top: 7%;
  margin-right: 5.7%;
  font-size: 16px;
  color: ${props => props.theme.greyScale.grey5};
`

const InputContainer = styled.div`
  margin: 0 12px 0 5.7%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.greyScale.grey3};
  width: 100%;
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
