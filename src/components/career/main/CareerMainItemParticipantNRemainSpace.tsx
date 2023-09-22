import { styled } from 'styled-components'
export const CareerMainItemParticipant = ({ positions }) => {
  const fetchPositions = positions
  return (
    <ParticipantNRemainSpate>
      {fetchPositions || '없음'} | 4/6명
    </ParticipantNRemainSpate>
  )
}

// 참여자 직급 | 잔여석
const ParticipantNRemainSpate = styled.div`
  color: ${props => props.theme.greyScale.grey6};
`
