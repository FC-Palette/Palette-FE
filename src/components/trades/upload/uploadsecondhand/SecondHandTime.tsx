import { DesktopTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import styled from 'styled-components'
import { secondhandcreateglobalstate } from 'recoil/index'
import { useRecoilState } from 'recoil'

export const SecondHandTime = () => {
  const [secondHandGlobalState, setSecondHandGlobalState] = useRecoilState(
    secondhandcreateglobalstate
  )
  const { transactionStartTime, transactionEndTime } = secondHandGlobalState

  const handleStartTime = time => {
    // 시간을 문자열로 변환하여 상태에 업데이트
    setSecondHandGlobalState(prev => ({
      ...prev,
      transactionStartTime: time.format('HH:mm:ss')
    }))
  }

  const handleEndTime = time => {
    // 시간을 문자열로 변환하여 상태에 업데이트
    setSecondHandGlobalState(prev => ({
      ...prev,
      transactionEndTime: time.format('HH:mm:ss')
    }))
  }
  return (
    <TimePickerContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <>
          <DesktopTimePicker
            label="시작 시간"
            value={transactionStartTime}
            onChange={handleStartTime}
            format="HH:mm:ss"
          />
          {' ~ '}
        </>
        <>
          <DesktopTimePicker
            label="종료 시간"
            value={transactionEndTime}
            onChange={handleEndTime}
            format="HH:mm:ss" //
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
