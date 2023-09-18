// 맴버 승인 방법 선택 컴포넌트 (선착순, 승인제)
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { CareerCreateGlobalState } from '../..'

interface selectProps {
  $isSelected: boolean | string
  onClick: () => void
}
export const MemberApprovalMethodSelector = () => {
  const [globalState, setGlobalState] = useRecoilState(CareerCreateGlobalState)
  const { isApprove } = globalState // 선착순 => false(default)

  const handleToggleApprovalType = (type: boolean) => {
    setGlobalState(prevState => ({
      ...prevState,
      isApprove: type
    }))
  }

  return (
    <>
      <ToggleNTextWrap>
        <QuestionTitleSmall>멤버승인</QuestionTitleSmall>
        <ToggleRowSortContainer>
          <ToggleL
            onClick={() => handleToggleApprovalType(!isApprove)}
            $isSelected={!isApprove}>
            선착순
          </ToggleL>
          <ToggleR
            onClick={() => handleToggleApprovalType(!isApprove)}
            $isSelected={isApprove}>
            승인제
          </ToggleR>
        </ToggleRowSortContainer>
      </ToggleNTextWrap>
    </>
  )
}

const QuestionTitleSmall = styled.div`
  font-size: 18px;
  margin-top: 28px;
  color: ${props => props.theme.greyScale.grey6};
`

// 토글 관련
const ToggleNTextWrap = styled.div`
  margin-top: 28px;
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ToggleRowSortContainer = styled.div`
  margin-top: 28px;
  display: flex;
  text-align: center;
  align-items: center;
  white-space: nowrap;
`

const ToggleL = styled.div<selectProps>`
  width: 68px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 8px 0 0 8px;
  padding: 6px 20px;
  flex: 1;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ToggleR = styled.div<selectProps>`
  width: 68px;
  height: 29px;
  font-size: 14px;
  line-height: 16.71px;
  border-radius: 0 8px 8px 0;
  flex: 1;
  padding: 6px 20px;
  background-color: ${props =>
    props.$isSelected ? props.theme.main.blue0 : props.theme.subColor.blueGrey};
  color: ${props =>
    props.$isSelected ? props.theme.main.white : props.theme.greyScale.grey5};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
