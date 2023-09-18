import {
  CareerCreateGlobalState,
  CareerCreateMeetingHeaderDynamic,
  StepPreviewCard
} from '@/components/career'
import { useRecoilValue } from 'recoil'

export const CareerCreateMeetingStepPreview = () => {
  const globalState = useRecoilValue(CareerCreateGlobalState)
  const { meetupTitle } = globalState

  console.log(globalState)

  return (
    <>
      <CareerCreateMeetingHeaderDynamic meetupTitle={meetupTitle} />
      <StepPreviewCard />
    </>
  )
}
