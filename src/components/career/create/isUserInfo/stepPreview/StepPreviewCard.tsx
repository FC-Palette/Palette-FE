import {
  GetMeetingCategory,
  GetMeetingInfo,
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription,
  PreviewMember
} from '.'

export const StepPreviewCard = () => {
  return (
    <>
      <GetThumbnail />
      <GetRoomManagerInfo />
      <GetTitleAndDescription />
      <GetMeetingCategory />
      <GetStats />
      <GetMeetingInfo />
      <PreviewMember />
    </>
  )
}
