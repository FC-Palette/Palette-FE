// 1페이지, 1번 2번 항목 관리
import { profileNCareerFilter } from '@/constants'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { CareerCreateGlobalState } from '../..'
import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const MeetupTypeSelector1 = () => {
  const [globalData, setGlobalData] = useRecoilState(CareerCreateGlobalState)
  const [selectedItem1, setSelectedItem1] = useState<string>('')
  const { selectedItem2 } = globalData

  const handleItemSelect = (item: string, questionKey: string) => {
    if (questionKey === 'Answer1') {
      setSelectedItem1(item)
    } else if (questionKey === 'Answer2') {
      setGlobalData(prevData => ({
        ...prevData,
        selectedItem2: item
      }))
    }
  }

  const isAnswerSelected = (item: string, questionKey: string) => {
    return (
      (questionKey === 'Answer1' && selectedItem1 === item) ||
      (questionKey === 'Answer2' && selectedItem2 === item)
    )
  }

  const Answer_1 = profileNCareerFilter.typeOne.map(item => (
    <AnswerItem
      key={item}
      onClick={() => handleItemSelect(item, 'Answer1')}
      $isSelected={isAnswerSelected(item, 'Answer1')}>
      {item}
    </AnswerItem>
  ))

  const Answer_2 = profileNCareerFilter.typeTwo.map(item => (
    <AnswerItem
      key={item}
      onClick={() => handleItemSelect(item, 'Answer2')}
      $isSelected={isAnswerSelected(item, 'Answer2')}>
      {item}
    </AnswerItem>
  ))

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        어떤 주제로 모임을 만드시겠어요
      </CareerCreateMeetingCommonQuestion>
      <AnswerContainer>{Answer_1}</AnswerContainer>
      <CareerCreateMeetingCommonQuestion>
        어떤 주제로 모임을 만드시겠어요
      </CareerCreateMeetingCommonQuestion>
      <AnswerContainer>{Answer_2}</AnswerContainer>
    </>
  )
}

const AnswerContainer = styled.div`
  display: flex;
  gap: 8px;
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
