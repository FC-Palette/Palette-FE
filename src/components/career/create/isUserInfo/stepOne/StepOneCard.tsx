import {
  MeetupTypeSelector1,
  MeetupTypeSelector2,
  RoleAndGenderSelector
} from '.'
import { CareerCreateMeetingStaticHeader } from '../..'
import { StepProgressBar } from '@/components'

export const StepOneCard = () => {
  return (
    <>
      <CareerCreateMeetingStaticHeader />
      <StepProgressBar $currentPage={1} />
      <MeetupTypeSelector1 />
      <MeetupTypeSelector2 />
      <RoleAndGenderSelector />
    </>
  )
}
