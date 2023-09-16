import { StepProgressBar } from '@/components'
import {
  CareerCreateMeetingStaticHeader,
  StepTwoCard
} from '@/components/career'

export const CareerCreateMeetingStepTwo = () => {
  return (
    <>
      <CareerCreateMeetingStaticHeader />
      <StepProgressBar $currentPage={2} />
      <StepTwoCard />
    </>
  )
}
