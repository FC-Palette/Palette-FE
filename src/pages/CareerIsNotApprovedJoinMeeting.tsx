import { Header } from '@/components'
import { IsNotApprovedJoinMeetingStepOneCard } from '@/components/career'

import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const CareerIsNotApprovedJoinMeeting = () => {
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
        <IsNotApprovedJoinMeetingStepOneCard />
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  max-width: 430px;
  width: 100%;
  overflow-y: scroll;
`
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
