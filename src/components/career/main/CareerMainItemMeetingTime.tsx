import { styled } from 'styled-components'
export const CareerMainItemMeetingTime = ({
  week,
  days,
  time,
  progressTime
}) => {
  const fetchWeek = week
  const fetchDays = days
  const fetchTime = time
  const fetchProgressTiem = progressTime

  return (
    <MeetingTime>
      {fetchWeek ? fetchWeek : ''} {fetchDays ? fetchDays : ''} {fetchTime}{' '}
      {fetchProgressTiem ? `${fetchProgressTiem}분` : '-'}
    </MeetingTime>
  )
}

const MeetingTime = styled.div`
  color: ${props => props.theme.greyScale.grey6};
  margin-bottom: -5px;
`
