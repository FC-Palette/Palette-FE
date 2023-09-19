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
          onClick={() => navigate('/careerMain')}
          $btnHeight="60px"
          $btnWidth="382px">
          다른 모임 구경하기
        </Button>
      </BtnContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 430px;
  height: 932px;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 32px;
  margin: 0 24px 32px;
`
