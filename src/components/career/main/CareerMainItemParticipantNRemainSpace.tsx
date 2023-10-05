import { styled } from 'styled-components'

interface GreyProps {
  $isGrey?: boolean
}
export const CareerMainItemParticipant = ({
  positions, // 직급
  recruitedPersonnel, // 모집된 인원수
  headCount, // 모집 인원수
  remainingSeats
}) => {
  const fetchPositions = positions
  const fetchsubscription = recruitedPersonnel
  const fetchHeadCount = headCount

  return (
    <ParticipantNRemainSpate $isGrey={remainingSeats === 0}>
      {fetchPositions.join(' ') || '없음'} |{' '}
      {`${fetchsubscription}/${fetchHeadCount}`}명
    </ParticipantNRemainSpate>
  )
}

// 참여자 직급 | 잔여석
const ParticipantNRemainSpate = styled.div<GreyProps>`
  color: ${props =>
    props.$isGrey ? props.theme.greyScale.grey3 : props.theme.greyScale.grey6};
`
