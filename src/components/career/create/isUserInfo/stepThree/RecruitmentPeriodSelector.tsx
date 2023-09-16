import styled from 'styled-components'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import { MobileDatePicker } from '@mui/x-date-pickers'
import 'dayjs/locale/ko'
// 모집 기간
export const RecruitmentPeriodSelector = () => {
  const dateNow = new Date()
  const today = dateNow.toISOString().slice(0, 10)

  const [startDate, setStartDate] = useState(today) // 시작일 상태
  const [endDate, setEndDate] = useState(today) // 종료일 상태

  // 시작일 변경 핸들러
  const handleStartDateChange = date => {
    setStartDate(date.toISOString().slice(0, 10))
  }

  // 종료일 변경 핸들러
  const handleEndDateChange = date => {
    setEndDate(date.toISOString().slice(0, 10))
  }

  console.log(startDate, endDate)
  return (
    <>
      <QuestionTitle>기간을 설정해주세요.</QuestionTitle>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="ko">
        <TimePickerContainer>
          <MobileDatePicker
            slotProps={{ textField: { size: 'small' } }}
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
// Title
const QuestionTitle = styled.div`
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.theme.greyScale.grey6};
`

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${props => props.theme.greyScale.grey9};
  height: 48px;
`
