import { StepProgressBar } from 'components/common'
import { CareerCreateMeetingHeader, StepOne } from '@/components/career'
export const CareerCreateMeetingStepOne = () => {
  return (
    <>
      <CareerCreateMeetingHeader />
      <StepProgressBar $currentPage={1} />
      <StepOne />
    </>
  )
}
