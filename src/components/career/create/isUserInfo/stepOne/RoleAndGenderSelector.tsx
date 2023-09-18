import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { profileNCareerFilter } from '@/constants'
import { iconMapping } from '@/components'
import { useRecoilState } from 'recoil'
import { CareerCreateGlobalState } from '../..'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const RoleAndGenderSelector = () => {
  const [globalState, setGlobalState] = useRecoilState(CareerCreateGlobalState)
  const { gender, selectedRoles } = globalState

  const genderList = ['무관', '남성만', '여성만']

  const updateGender = newGender => {
    setGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      gender: newGender
    }))
  }

  const updateSelectedRoles = role => {
    setGlobalState(prevGlobalState => {
      let newSelectedRoles

      if (role === '무관') {
        // 무관 선택시 다 제거하고 무관만 선택
        newSelectedRoles = ['무관']
      } else {
        // 무관 이외 아이템 선택시, 무관 빼고 아이템 선택
        newSelectedRoles = prevGlobalState.selectedRoles.includes('무관')
          ? [role]
          : [...prevGlobalState.selectedRoles, role]
      }

      return {
        ...prevGlobalState,
        selectedRoles: newSelectedRoles
      }
    })
  }

  const isItemSelected = (item: string) => {
    return gender.includes(item)
  }

  // 직급
  const AnswerItems_1 = profileNCareerFilter.rank.map(item => {
    return (
      <AnswerItem
        key={item}
        onClick={() => updateSelectedRoles(item)}
        $isSelected={selectedRoles.includes(item)}>
        {item}
      </AnswerItem>
    )
  })

  const AnswerItems_2 = genderList.map(item => (
    <AnswerItem
      key={item}
      onClick={() => updateGender(item)}
      $isSelected={gender === item}>
      {item !== '무관' && (
        <IconWrapper
          $isSelected={isItemSelected(item)}
          onClick={() => updateGender(item)}>
          {iconMapping[item]}
        </IconWrapper>
      )}
      {item}
    </AnswerItem>
  ))

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        원하시는 직급이 있으신가요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{AnswerItems_1}</AnswerItemFlexWrap>
      <CareerCreateMeetingCommonQuestion>
        원하시는 성별이 있으신가요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{AnswerItems_2}</AnswerItemFlexWrap>
    </>
  )
}
const AnswerItem = styled.div<SelectedAnswerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 43px;
  background-color: orange;
  color: royalblue;
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
  width: 382px;
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
