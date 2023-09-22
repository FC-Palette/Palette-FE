import { Button } from '@/components'
import styled from 'styled-components'
import { JoinMeetingStepCompleteTitle } from '.'
import { useNavigate } from 'react-router-dom'

export const IsApprovedJoinMeetingStepCompleteCard = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <JoinMeetingStepCompleteTitle />
      <BtnContainer>
        <Button
          onClick={() => navigate('/career')}
          $btnHeight="60px"
          $btnWidth="382px">
          다른 모임 구경하기
        </Button>
      </BtnContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 32px;
  margin: 5.7%;
`
