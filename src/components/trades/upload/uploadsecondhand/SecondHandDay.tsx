import { useRecoilState } from 'recoil'
import { secondhandcreateglobalstate } from 'recoil/index'
import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { centralise } from 'styles/index'

interface selectProps {
  $isSelected: boolean
}

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']

export const SecondHandDay = () => {
  const [secondHandGlobalState, SetSecondHandGlobalState] = useRecoilState(
    secondhandcreateglobalstate
  )

  const toggleDaySelection = (day: string) => {
    if (secondHandGlobalState.selectedDays.includes(day)) {
      SetSecondHandGlobalState(prevSecondHandGlobalState => ({
        ...prevSecondHandGlobalState,
        selectedDays: prevSecondHandGlobalState.selectedDays.filter(
          selectedDay => selectedDay !== day
        )
      }))
    } else {
      SetSecondHandGlobalState(prevSecondHandGlobalState => ({
        ...prevSecondHandGlobalState,
        selectedDays: [...prevSecondHandGlobalState.selectedDays, day]
      }))
    }
  }

  return (
    <>
      <Wrapper>
        {daysOfWeek.map((day, index) => (
          <DayButton
            key={index}
            onClick={() => toggleDaySelection(day)}
            $isSelected={secondHandGlobalState.selectedDays.includes(day)}
            className={
              secondHandGlobalState.selectedDays.includes(day) ? 'selected' : ''
            }>
            {day}
          </DayButton>
        ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: 21px;
  font-size: ${theme.customSize.xlarge};
  margin-bottom: 8px;
  font-weight: 700;
  color: ${theme.greyScale.grey6};
  display: flex;
  width: 335px;
  justify-content: space-between;
  margin: 15px 0px;
`
const DayButton = styled.div<selectProps>`
  ${centralise};
  line-height: 19.09px;
  font-size: 16px;
  border-radius: 21px;
  width: 42px;
  height: 42px;
  color: ${props => props.theme.greyScale.grey9};
  background-color: ${props => props.theme.subColor.blueGrey};

  &.selected {
    background-color: ${props => props.theme.main.blue0};
    color: ${props => props.theme.main.white};
  }
`
