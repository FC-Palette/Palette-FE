import { StepProgressBar } from '@/components'
import {
  CareerCreateMeetingStaticHeader,
  StepThreeCard
} from '@/components/career'

export const CareerCreateMeetingStepThree = () => {
  return (
    <>
      <CareerCreateMeetingStaticHeader />
      <StepProgressBar $currentPage={3} />
      <StepThreeCard />
    </>
  )
}
