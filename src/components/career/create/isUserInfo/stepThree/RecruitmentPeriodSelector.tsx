import styled from 'styled-components'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ko'
import { useSetRecoilState } from 'recoil'
import { careerCreateGlobalState } from '@/recoil'
import dayjs from 'dayjs'

export const RecruitmentPeriodSelector = () => {
  const formatDate = (date: string) => dayjs(date).format('YYYY-MM-DD')
  const setGlobalState = useSetRecoilState(careerCreateGlobalState)

  const handleDateChange = (date: any, type: string) => {
    const formattedDate = formatDate(date)
    setGlobalState(prevDate => ({
      ...prevDate,
      [type]: formattedDate
    }))
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="ko">
      <TimePickerContainer>
        <DesktopDatePicker
          label="시작일"
          onChange={date => handleDateChange(date, 'startDate')}
        />
        ~
        <DesktopDatePicker
          label="종료일"
          onChange={date => handleDateChange(date, 'endDate')}
        />
      </TimePickerContainer>
    </LocalizationProvider>
  )
}

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${props => props.theme.greyScale.grey9};
  height: 48px;
  margin: 0.8% 5.7%;
`
