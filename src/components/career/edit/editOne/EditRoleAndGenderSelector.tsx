import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { profileNCareerFilter } from '@/constants'
import { iconMapping } from '@/components'
import { useRecoilState } from 'recoil'
import { editDtoAtom } from '@/recoil'
import { sexList } from '@/constants'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const EditRoleAndGenderSelector = () => {
  const [globalState, setGlobalState] = useRecoilState(editDtoAtom)
  const { sex, positions } = globalState // position === 직급

  const updateSex = (newSex: string) => {
    setGlobalState(prevData => ({
      ...prevData,
      sex: newSex
    }))
  }

  const updateSelectedPosition = role => {
    setGlobalState(prevData => {
      let newPositions: string[]

      if (prevData.positions.includes(role)) {
        newPositions = prevData.positions.filter(item => item !== role)
      } else {
        if (role === sexList[0]) {
          // 무관 선택시 다 제거하고 무관만 선택
          newPositions = [sexList[0]]
        } else {
          // 무관 이외 아이템 선택시, 무관 빼고 아이템 선택
          newPositions = prevData.positions.includes(sexList[0])
            ? [role]
            : [...prevData.positions, role]
        }
      }

      return {
        ...prevData,
        positions: newPositions
      }
    })
  }

  const isSexSelected = (item: string) => {
    return sex.includes(item)
  }

  // 직급
  const AnswerItems_1 = profileNCareerFilter.rank.map(item => {
    return (
      <AnswerItem
        key={item}
        onClick={() => updateSelectedPosition(item)}
        $isSelected={positions.includes(item)}>
        {item}
      </AnswerItem>
    )
  })

  // 성별
  const AnswerItems_2 = sexList.map(item => (
    <AnswerItem
      key={item}
      onClick={() => updateSex(item)}
      $isSelected={sex === item}>
      {item !== sexList[0] && (
        <IconWrapper
          $isSelected={isSexSelected(item)}
          onClick={() => updateSex(item)}>
          {iconMapping[item]}
        </IconWrapper>
      )}
      {item}
    </AnswerItem>
  ))

  return (
    <Wrap>
      <CareerCreateMeetingCommonQuestion>
        원하시는 직급이 있으신가요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{AnswerItems_1}</AnswerItemFlexWrap>
      <CareerCreateMeetingCommonQuestion>
        원하시는 성별이 있으신가요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{AnswerItems_2}</AnswerItemFlexWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  &:last-child {
    padding-bottom: 30px;
  }
`

const AnswerItem = styled.div<SelectedAnswerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  border-radius: 21px;
  padding: 12px;
  cursor: pointer;
  background-color: ${props =>
    props.$isSelected
      ? props.theme.subColor.blie10
      : props.theme.subColor.blueGrey};
  color: ${props => (props.$isSelected ? props.theme.main.blue0 : '#000')};
`

const AnswerItemFlexWrap = styled.div`
  padding: 0 5.7%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-width: 120px;
  cursor: pointer;
`

const IconWrapper = styled.div<SelectedAnswerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  color: ${props => (props.$isSelected ? props.theme.main.blue0 : ' #ff4040')};
  width: 16px;
  height: 16px;
`
