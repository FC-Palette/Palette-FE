// useCallback
import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { profileNCareerFilter } from '@/constants'
import { iconMapping } from '@/components'
import { useRecoilState } from 'recoil'
import { careerCreateGlobalState } from '@/recoil'
import { useCallback } from 'react'
import { sexList } from '@/constants'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const RoleAndGenderSelector = () => {
  const [globalState, setGlobalState] = useRecoilState(careerCreateGlobalState)
  const { sex, positions } = globalState

  const updateGender = useCallback(
    (newGender: string) => {
      setGlobalState(prevGlobalState => ({
        ...prevGlobalState,
        sex: newGender
      }))
    },
    [setGlobalState]
  )

  const updateSelectedRoles = useCallback(
    (role: string) => {
      setGlobalState(prevGlobalState => {
        let newSelectedRoles: string[]

        if (prevGlobalState.positions.includes(role)) {
          newSelectedRoles = prevGlobalState.positions.filter(
            item => item !== role
          )
        } else {
          if (role === sexList[0]) {
            newSelectedRoles = [sexList[0]]
          } else {
            newSelectedRoles = prevGlobalState.positions.includes(sexList[0])
              ? [role]
              : [...prevGlobalState.positions, role]
          }
        }

        return {
          ...prevGlobalState,
          positions: newSelectedRoles
        }
      })
    },
    [setGlobalState]
  )

  const isItemSelected = useCallback(
    (item: string) => {
      return sex.includes(item)
    },
    [sex]
  )

  const renderAnswerItems_1 = useCallback(() => {
    return profileNCareerFilter.rank.map(item => (
      <AnswerItem
        key={item}
        onClick={() => updateSelectedRoles(item)}
        $isSelected={positions.includes(item)}>
        {item}
      </AnswerItem>
    ))
  }, [updateSelectedRoles, positions])

  const renderAnswerItems_2 = useCallback(() => {
    return sexList.map(item => (
      <AnswerItem
        key={item}
        onClick={() => updateGender(item)}
        $isSelected={sex === item}>
        {item !== sexList[0] && (
          <IconWrapper
            $isSelected={isItemSelected(item)}
            onClick={() => updateGender(item)}>
            {iconMapping[item]}
          </IconWrapper>
        )}
        {item}
      </AnswerItem>
    ))
  }, [updateGender, isItemSelected, sex])

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        원하시는 직급이 있으신가요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{renderAnswerItems_1()}</AnswerItemFlexWrap>
      <CareerCreateMeetingCommonQuestion>
        원하시는 성별이 있으신가요?
      </CareerCreateMeetingCommonQuestion>
      <AnswerItemFlexWrap>{renderAnswerItems_2()}</AnswerItemFlexWrap>
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
