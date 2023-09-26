import { atom } from 'recoil'

const dateNow = new Date()
const today = dateNow.toISOString().slice(0, 10)

export const careerEditGlobalState = atom({
  key: 'careerEditGlobalState',
  default: {
    // MeetupTypeSelecor1
    category: '커리어',
    type: '',
    // MeetupTypeSelecor2
    jobs: [] as string[],
    // RoleAndGender
    positions: [] as string[],
    sex: '무관',
    // MeetupImage
    editImages: [] as Blob[],
    // MeetupTitleAndDescription
    title: '',
    description: '',
    // RecruitmentSize
    headCount: 0,
    // RecruitmentPeriod
    startDate: today,
    endDate: today,
    // MeeupDetails
    onOff: false,
    place: '',
    week: '',
    days: [] as string[],
    periodicMeeting: false,
    meetingTime: '',
    progressTime: '',
    // MemberApprovalMethod
    acceptType: '선착순'
  }
})
