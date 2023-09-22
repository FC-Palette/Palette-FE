import styled from 'styled-components'
import { JoinMeetingStepOneTitle } from '../common'
import { Header, StepProgressBar } from '@/components'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'

export const IsApprovedJoinMeetingStepOneCard = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Header
        centerText="모임신청"
        leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>
        }
      />
      <StepProgressBar $currentPage={'1'} />
      <JoinMeetingStepOneTitle />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
