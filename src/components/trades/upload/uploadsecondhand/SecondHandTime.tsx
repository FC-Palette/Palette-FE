import { DesktopTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styled from 'styled-components'
import { secondhandglobalstate } from 'recoil/index'
import { useRecoilState } from 'recoil'

export const SecondHandTime = () => {
  const [secondHandGlobalState, setSecondHandGlobalState] = useRecoilState(
    secondhandglobalstate
  )
  const { transactionStartTime, transactionEndTime } = secondHandGlobalState

  const handleStartTime = time => {
    setSecondHandGlobalState(prev => ({
      ...prev,
      transactionStartTime: time
    }))
  }

  const handleEndTime = time => {
    setSecondHandGlobalState(prev => ({
      ...prev,
      transactionEndTime: time
    }))
  }

  return (
    <TimePickerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <>
          <DesktopTimePicker
            label="시작 시간"
            value={transactionStartTime}
            onChange={newValue => handleStartTime(newValue)}
          />
          {' ~ '}
        </>
        <>
          <DesktopTimePicker
            label="종료 시간"
            value={transactionEndTime}
            onChange={newValue => handleEndTime(newValue)}
          />
        </>
      </LocalizationProvider>
    </TimePickerContainer>
  )
}
const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${props => props.theme.greyScale.grey9};
  height: 48px;
  margin: 8px 0px;
`
