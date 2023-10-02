import { profileNCareerFilter } from '@/constants'
import styled from 'styled-components'
import { CareerCreateMeetingCommonQuestion } from '../..'
import { iconMapping } from '@/components'
import { useRecoilState } from 'recoil'
import { careerCreateGlobalState } from '@/recoil'
import { useEffect, useState } from 'react'

interface SelectedAnswerProps {
  $isSelected: boolean
  onClick: () => void
}

export const MeetupTypeSelector2 = () => {
  const [globalData, setGlobalData] = useRecoilState(careerCreateGlobalState)
  const { jobs } = globalData
  const [message, setMessage] = useState(false)
  const checkLength = jobs.length

  useEffect(() => {
    checkLength >= 3 ? setMessage(true) : setMessage(false)
  }, [checkLength])

  const isItemSelected = (item: string) => {
    return jobs.includes(item)
  }
  const handleSelectedItem = (item: string) => {
    const isSelected = jobs.includes(item)

    if (isSelected) {
      setGlobalData(prevData => ({
        ...prevData,
        jobs: prevData.jobs.filter(prevItem => prevItem !== item)
      }))
    } else {
      if (jobs.length >= 3) {
        return
      }
      setGlobalData(prevData => ({
        ...prevData,
        jobs: [...prevData.jobs, item]
      }))
    }
  }

  const AnswerItems = profileNCareerFilter.meetingJopType.map(item => (
    <AnswerItem
      key={item}
      onClick={() => handleSelectedItem(item)}
      $isSelected={isItemSelected(item)}>
      <IconWrapper
        $isSelected={isItemSelected(item)}
        onClick={() => handleSelectedItem(item)}>
        {iconMapping[item]}
      </IconWrapper>
      {item}
    </AnswerItem>
  ))

  return (
    <>
      <CareerCreateMeetingCommonQuestion>
        어떤 종류의 모임을 만드시겠어요?
      </CareerCreateMeetingCommonQuestion>
      <Wrapper>
        <AnswerItemFlexWrap>{AnswerItems}</AnswerItemFlexWrap>
      </Wrapper>

      {message && (
        <MessageContainer>
          모임 종류는 3개까지 선택 가능합니다.
        </MessageContainer>
      )}
    </>
  )
}

const Wrapper = styled.div`
  margin: 0 5.7%;
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
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

const MessageContainer = styled.div`
  padding: 1% 2%;
  min-width: 200px;
  height: 30px;
  background-color: rgba(55, 65, 81, 0.8);
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 9999;
`
