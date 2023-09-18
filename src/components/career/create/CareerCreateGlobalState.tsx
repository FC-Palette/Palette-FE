import { atom } from 'recoil'

const dateNow = new Date()
const today = dateNow.toISOString().slice(0, 10)

export const CareerCreateGlobalState = atom({
  key: 'globalState',
  default: {
    // MeetupTypeSelecor1
    selectedItem1: '커리어',
    selectedItem2: '',
    // MeetupTypeSelecor2
    selectedMeetingTypes: [] as string[],
    // RoleAndGender
    selectedRoles: [] as string[],
    gender: '무관',
    // MeetupImage
    meetupImages: [] as Blob[],
    // MeetupTitleAndDescription
    meetupTitle: '',
    meetupDescription: '',
    // RecruitmentSize
    recruitmentSize: 0,
    // RecruitmentPeriod
    meetupStartDay: today,
    meetupEndDay: today,
    // MeeupDetails
    onlineToggleState: false,
    meetingPlace: '',
    periodicMeeting: false,
    selectedDays: [] as string[],
    meetingFrequency: '',
    meetingTime: '',
    progressTime: '',
    // MemberApprovalMethod
    isApprove: false
  }
})
