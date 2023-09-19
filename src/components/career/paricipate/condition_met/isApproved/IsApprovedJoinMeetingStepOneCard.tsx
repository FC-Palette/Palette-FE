import styled from 'styled-components'
import { JoinMeetingStepOneTitle } from '../common'
import { Button } from '@/components'
import { useNavigate } from 'react-router-dom'

export const IsApprovedJoinMeetingStepOneCard = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <JoinMeetingStepOneTitle />
      <BtnContainer>
        <Button
          onClick={() => navigate('/isApproved-joinMeeting-2')}
          $btnHeight="60px"
          $btnWidth="382px">
          동의하기
        </Button>
      </BtnContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 430px;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 282px 24px 32px;
`
