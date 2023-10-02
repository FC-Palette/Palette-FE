import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { profileNCareerFilter } from '@/constants'
import { iconMapping } from '@/components'
import { useRecoilState } from 'recoil'
import { careerCreateGlobalState } from '@/recoil'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const RoleAndGenderSelector = () => {
  const [globalState, setGlobalState] = useRecoilState(careerCreateGlobalState)
  const { sex, positions } = globalState

  const genderList = ['무관', '남성만', '여성만']

  const updateGender = (newGender: string) => {
    setGlobalState(prevGlobalState => ({
      ...prevGlobalState,
      sex: newGender
    }))
  }

  const updateSelectedRoles = role => {
    setGlobalState(prevGlobalState => {
      let newSelectedRoles: string[]

      if (prevGlobalState.positions.includes(role)) {
        newSelectedRoles = prevGlobalState.positions.filter(
          item => item !== role
        )
      } else {
        if (role === '무관') {
          newSelectedRoles = ['무관']
        } else {
          newSelectedRoles = prevGlobalState.positions.includes('무관')
            ? [role]
            : [...prevGlobalState.positions, role]
        }
      }

      return {
        ...prevGlobalState,
        positions: newSelectedRoles
      }
    })
  }

  const isItemSelected = (item: string) => {
    return sex.includes(item)
  }

  // 직급
  const AnswerItems_1 = profileNCareerFilter.rank.map(item => {
    return (
      <AnswerItem
        key={item}
        onClick={() => updateSelectedRoles(item)}
        $isSelected={positions.includes(item)}>
        {item}
      </AnswerItem>
    )
  })

  // 성별
  const AnswerItems_2 = genderList.map(item => (
    <AnswerItem
      key={item}
      onClick={() => updateGender(item)}
      $isSelected={sex === item}>
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
  margin: 0 5.7%;
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
