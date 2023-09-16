import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { profileNCareerFilter } from '@/constants'
import { useSelectedItems } from '@/components/career/hooks'
import { useState } from 'react'
import { iconMapping } from '@/components'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const RoleAndGenderSelector = () => {
  const {
    selectedItems: selectedRoles,
    isItemSelected: isRoleSelected,
    handleSelectedItem: handleRoleSelectedItem
  } = useSelectedItems([])
  const [gender, setGender] = useState('무관')

  const genderList = ['무관', '남성만', '여성만']

  const AnswerItems_1 = profileNCareerFilter.rank.map(item => {
    return (
      <AnswerItem
        key={item}
        onClick={() => handleRoleSelectedItem(item)}
        $isSelected={isRoleSelected(item)}>
        {item}
      </AnswerItem>
    )
  })

  const isItemSelected = (item: string) => {
    return gender.includes(item)
  }

  const AnswerItems_2 = genderList.map(item => (
    <AnswerItem
      key={item}
      onClick={() => setGender(item)}
      $isSelected={gender === item}>
      {item !== '무관' && (
        <IconWrapper
          $isSelected={isItemSelected(item)}
          onClick={() => setGender(item)}>
          {iconMapping[item]}
        </IconWrapper>
      )}
      {item}
    </AnswerItem>
  ))

  console.log(gender)

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
