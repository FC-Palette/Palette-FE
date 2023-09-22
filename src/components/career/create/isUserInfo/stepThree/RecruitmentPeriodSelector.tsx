// 모집 기간
import styled from 'styled-components'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/ko'
import { useSetRecoilState } from 'recoil'
import { CareerCreateGlobalState } from '../..'
import dayjs from 'dayjs'

export const RecruitmentPeriodSelector = () => {
  const setGlobalState = useSetRecoilState(CareerCreateGlobalState)

  const handleStartDateChange = date => {
    const dateFormat_Start = dayjs(date).format('YYYY-MM-DD')
    setGlobalState(prevDate => ({
      ...prevDate,
      meetupStartDay: dateFormat_Start
    }))
  }

  // 종료일 변경 핸들러
  const handleEndDateChange = date => {
    const dateFormat_End = dayjs(date).format('YYYY-MM-DD')
    setGlobalState(prevDate => ({
      ...prevDate,
      meetupEndDay: dateFormat_End
    }))
  }

  return (
    <>
      {/* <QuestionTitle>기간을 설정해주세요.</QuestionTitle> */}
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
// Title
// const QuestionTitle = styled.div`
//   margin: 32px 24px 0;
//   font-weight: 500;
//   font-size: 18px;
//   color: ${props => props.theme.greyScale.grey6};
// `

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${props => props.theme.greyScale.grey9};
  height: 48px;
  margin: 0.8% 5.7%;
`
