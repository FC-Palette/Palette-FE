import { styled } from 'styled-components'
export const CareerMainItemParticipant = ({
  positions, // 직급
  recruitedPersonnel, // 모집된 인원수
  headCount // 모집 인원수
}) => {
  const fetchPositions = positions
  const fetchsubscription = recruitedPersonnel
  const fetchHeadCount = headCount

  return (
    <ParticipantNRemainSpate>
      {fetchPositions.join(' ') || '없음'} |{' '}
      {`${fetchsubscription}/${fetchHeadCount}`}명
    </ParticipantNRemainSpate>
  )
}

// 참여자 직급 | 잔여석
const ParticipantNRemainSpate = styled.div`
  color: ${props => props.theme.greyScale.grey6};
`
