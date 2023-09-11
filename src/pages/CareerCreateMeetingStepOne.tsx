import { StepProgressBar } from '@/components'
import { CareerCreateMeetingHeader, StepOne } from '@/components/career'

import styled from 'styled-components'
export const CareerCreateMeetingStepOne = () => {
  return (
    <Wrap>
      <CareerCreateMeetingHeader />
      <StepProgressBar $currentPage={1} />
      <StepOne />
    </Wrap>
  )
}
const Wrap = styled.div`
  width: 430px;
  height: 100%;
  /* height: 932px; */
`
