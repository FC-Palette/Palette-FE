import { StepProgressBar } from '@/components'
import { CareerCreateMeetingHeader, StepTwo } from '@/components/career'

export const CareerCreateMeetingStepTwo = () => {
  return (
    <>
      <CareerCreateMeetingHeader />
      <StepProgressBar $currentPage={2} />
      <StepTwo />
    </>
  )
}
