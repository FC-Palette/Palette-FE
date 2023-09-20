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
import { CareerCreateGlobalState } from '../..'
import styled from 'styled-components'

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
      <Wrap>
        <GetThumbnail meetupImages={meetupImages} />
        <GetRoomManagerInfo />
        <GetTitleAndDescription
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
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  width: 100%;
`
