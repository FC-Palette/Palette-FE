// 모집 기간
import styled from 'styled-components'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ko'
import { useSetRecoilState } from 'recoil'
import { tradescreateglobalstate } from 'recoil/index'
import dayjs from 'dayjs'

export const DeadLine = () => {
  const tradesGlobalState = useSetRecoilState(tradescreateglobalstate)

  const handleStartDateChange = date => {
    const dateFormat_Start = dayjs(date).format('YYYY-MM-DD')
    tradesGlobalState(prevDate => ({
      ...prevDate,
      startDay: dateFormat_Start
    }))
  }

  // 종료일 변경 핸들러
  const handleEndDateChange = date => {
    const dateFormat_End = dayjs(date).format('YYYY-MM-DD')
    tradesGlobalState(prevDate => ({
      ...prevDate,
      endDay: dateFormat_End
    }))
  }

  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="ko">
        <TimePickerContainer>
          <DesktopDatePicker
            label="시작일"
            onChange={handleStartDateChange}
          />
          ~
          <DesktopDatePicker
            label="종료일"
            onChange={handleEndDateChange}
          />
        </TimePickerContainer>
      </LocalizationProvider>
    </>
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
