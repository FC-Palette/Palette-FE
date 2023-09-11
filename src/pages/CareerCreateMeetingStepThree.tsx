import { StepProgressBar } from '@/components'
import { CareerCreateMeetingHeader, StepThree } from '@/components/career'

export const CareerCreateMeetingStepThree = () => {
  return (
    <>
      <CareerCreateMeetingHeader />
      <StepProgressBar $currentPage={3} />
      <StepThree />
    </>
  )
}
