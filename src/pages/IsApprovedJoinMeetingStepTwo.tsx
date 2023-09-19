import { Button, Header, StepProgressBar } from '@/components'
import { IsApprovedJoinMeetingStepTwoCard } from '@/components/career'
import { ArrowLeft2 } from 'iconsax-react'
import styled from 'styled-components'

export const IsApprovedJoinMeetingStepTwo = () => {
  return (
    <>
      <Wrap>
        <Header
          centerText="모임신청"
          leftIcon={
            <StyledIcon>
              <ArrowLeft2 />
            </StyledIcon>
          }
        />
        <StepProgressBar $currentPage={'2'} />
        <IsApprovedJoinMeetingStepTwoCard />
        <BtnContainer>
          <Button
            $btnHeight="60px"
            $btnWidth="382px">
            동의하기
          </Button>
        </BtnContainer>
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

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 282px 24px 32px;
`
