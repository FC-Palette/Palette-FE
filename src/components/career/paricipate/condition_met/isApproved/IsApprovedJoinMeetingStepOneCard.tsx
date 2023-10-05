import styled from 'styled-components'
import { JoinMeetingStepOneTitle } from '../common'
import { Header, StepProgressBar } from '@/components'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'

export const IsApprovedJoinMeetingStepOneCard = () => {
  const navigate = useNavigate()

  const moveToBack = () => {
    navigate(-1)
  }
  return (
    <Container>
      <Header
        centerText="모임신청"
        leftIcon={
          <StyledIcon onClick={moveToBack}>
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
  max-width: 430px;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
