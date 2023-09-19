import { Header, StepProgressBar } from '@/components'
import { IsApprovedJoinMeetingStepOneCard } from '@/components/career'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const IsApprovedJoinMeetingStepOne = () => {
  const navigate = useNavigate()
  return (
    <>
      <Wrap>
        <Header
          centerText="모임신청"
          leftIcon={
            <StyledIcon onClick={() => navigate(-1)}>
              <ArrowLeft2 />
            </StyledIcon>
          }
        />
        <StepProgressBar $currentPage={'1'} />
        <IsApprovedJoinMeetingStepOneCard />
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 430px;
`
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
