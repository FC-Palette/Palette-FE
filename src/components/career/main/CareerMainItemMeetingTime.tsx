import { styled } from 'styled-components'
interface GreyProps {
  $isGrey?: boolean
}
export const CareerMainItemMeetingTime = ({
  week,
  days,
  time,
  progressTime,
  remainingSeats
}) => {
  const fetchWeek = week
  const fetchDays = days
  const fetchTime = time
  const fetchProgressTiem = progressTime

  return (
    <MeetingTime $isGrey={remainingSeats === 0}>
      {fetchWeek ? fetchWeek : ''} {fetchDays ? fetchDays : ''} {fetchTime}{' '}
      {fetchProgressTiem ? `${fetchProgressTiem}분` : '-'}
    </MeetingTime>
  )
}

const MeetingTime = styled.div<GreyProps>`
  color: ${props =>
    props.$isGrey ? props.theme.greyScale.grey3 : props.theme.greyScale.grey6};
  margin-bottom: -5px;
`
