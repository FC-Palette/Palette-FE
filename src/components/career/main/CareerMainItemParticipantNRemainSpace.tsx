import { styled } from 'styled-components'
export const CareerMainItemParticipant = () => {
  return <ParticipantNRemainSpate>신입만 | 4/6명</ParticipantNRemainSpate>
}

// 참여자 직급 | 잔여석
const ParticipantNRemainSpate = styled.div`
  color: ${props => props.theme.greyScale.grey6};
`
