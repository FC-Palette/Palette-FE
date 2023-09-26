import styled from 'styled-components'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ko'
import { useSetRecoilState } from 'recoil'
import { careerEditGlobalState } from '@/recoil'
import dayjs from 'dayjs'

export const EditRecruitmentPeriodSelector = () => {
  const setGlobalState = useSetRecoilState(careerEditGlobalState)

  const handleStartDateChange = date => {
    const dateFormat_Start = dayjs(date).format('YYYY-MM-DD')
    setGlobalState(prevDate => ({
      ...prevDate,
      startDate: dateFormat_Start
    }))
  }

  // 종료일 변경 핸들러
  const handleEndDateChange = date => {
    const dateFormat_End = dayjs(date).format('YYYY-MM-DD')
    setGlobalState(prevDate => ({
      ...prevDate,
      endDate: dateFormat_End
    }))
  }

  return (
    <>
      {' '}
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
  margin: 3% 5.7% 0;
`
