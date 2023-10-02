import { useRecoilValue } from 'recoil'
import {
  GetMeetingCategory,
  GetMeetingInfo,
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription,
  PreviewMember
} from '.'
import { CareerCreateMeetingHeaderDynamic } from '../..'
import { careerCreateGlobalState } from '@/recoil'

export const StepPreviewCard = () => {
  const globalState = useRecoilValue(careerCreateGlobalState)
  const {
    jobs,
    positions,
    sex,
    image,
    title,
    description,
    headCount,
    startDate,
    endDate,
    days,
    week,
    time,
    progressTime,
    acceptType
  } = globalState

  return (
    <>
      <CareerCreateMeetingHeaderDynamic meetupTitle={title} />
      <GetThumbnail meetupImages={image} />
      <GetRoomManagerInfo />
      <GetTitleAndDescription
        detailText="아직 이 모임에 대한 소개가 작성되지 않았어요."
        meetupTitle={title}
        meetupDescription={description}
      />
      <GetMeetingCategory selectedMeetingTypes={jobs} />
      <GetStats />
      <GetMeetingInfo
        selectedRoles={positions}
        gender={sex}
        recruitmentSize={headCount}
        meetingFrequency={week}
        selectedDays={days}
        meetingTime={time}
        progressTime={progressTime}
        meetupStartDay={startDate}
        meetupEndDay={endDate}
        isApprove={acceptType}
      />
      <PreviewMember />
    </>
  )
}
