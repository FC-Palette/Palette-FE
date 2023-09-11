import { styled } from 'styled-components'
export const CareerMainItemMeetingTime = () => {
  return <MeetingTime>매주 월요일 ・ AM 08:00</MeetingTime>
}

const MeetingTime = styled.div`
  color: ${props => props.theme.greyScale.grey6};
  margin-bottom: -7px;
`
