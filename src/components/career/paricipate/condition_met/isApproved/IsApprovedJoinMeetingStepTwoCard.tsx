import { Button, Header, StepProgressBar } from '@/components'
import { JoinMeetingStepTwoTextField, JoinMeetingStepTwoTitle } from '.'
import { ArrowLeft2 } from 'iconsax-react'
import styled from 'styled-components'

export const IsApprovedJoinMeetingStepTwoCard = () => {
  return (
    <>
      <Header
        centerText="모임신청"
        leftIcon={
          <StyledIcon>
            <ArrowLeft2 />
          </StyledIcon>
        }
      />
      <StepProgressBar $currentPage={'2'} />
      <JoinMeetingStepTwoTitle />
      <JoinMeetingStepTwoTextField />
    </>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 282px 24px 32px;
`
