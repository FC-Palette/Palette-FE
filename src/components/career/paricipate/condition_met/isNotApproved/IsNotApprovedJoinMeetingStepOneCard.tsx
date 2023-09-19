import styled from 'styled-components'
import { JoinMeetingStepOneTitle } from '../common'
import { Button } from '@/components'

export const IsNotApprovedJoinMeetingStepOneCard = () => {
  return (
    <Container>
      <JoinMeetingStepOneTitle />
      <BtnContainer>
        <Button
          $btnHeight="60px"
          $btnWidth="382px">
          동의하고 시작하기
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
