import {
  CareerCreateMeetingStaticHeader,
  StepOneCard
} from '@/components/career'

import { StepProgressBar } from 'components/common'

export const CareerCreateMeetingStepOne = () => {
  return (
    <>
      <CareerCreateMeetingStaticHeader />
      <StepProgressBar $currentPage={1} />
      <StepOneCard />
    </>
  )
}
