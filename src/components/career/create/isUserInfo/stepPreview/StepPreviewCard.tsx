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
import {
  CareerCreateGlobalState,
  CareerCreateMeetingHeaderDynamic
} from '../..'

export const StepPreviewCard = () => {
  const globalState = useRecoilValue(CareerCreateGlobalState)
  const {
    selectedMeetingTypes,
    selectedRoles,
    gender,
    meetupImages,
    meetupTitle,
    meetupDescription,
    recruitmentSize,
    meetupStartDay,
    meetupEndDay,
    selectedDays,
    meetingFrequency,
    meetingTime,
    progressTime,
    isApprove
  } = globalState

  return (
    <>
      <CareerCreateMeetingHeaderDynamic meetupTitle={meetupTitle} />
      <GetThumbnail meetupImages={meetupImages} />
      <GetRoomManagerInfo />
      <GetTitleAndDescription
        detailText="아직 이 모임에 대한 소개가 작성되지 않았어요."
        meetupTitle={meetupTitle}
        meetupDescription={meetupDescription}
      />
      <GetMeetingCategory selectedMeetingTypes={selectedMeetingTypes} />
      <GetStats />
      <GetMeetingInfo
        selectedRoles={selectedRoles}
        gender={gender}
        recruitmentSize={recruitmentSize}
        meetingFrequency={meetingFrequency}
        selectedDays={selectedDays}
        meetingTime={meetingTime}
        progressTime={progressTime}
        meetupStartDay={meetupStartDay}
        meetupEndDay={meetupEndDay}
        isApprove={isApprove}
      />
      <PreviewMember />
    </>
  )
}
