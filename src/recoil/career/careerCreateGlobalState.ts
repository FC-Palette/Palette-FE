import { CareerCreateGlobaDataInterface } from '@/types'
import { atom } from 'recoil'

const getDateNowString = (): string => {
  const dateNow = new Date()
  return dateNow.toISOString().slice(0, 10)
}

const initialCareerCreateData: CareerCreateGlobaDataInterface = {
  category: '커리어',
  type: '',
  jobs: [],
  positions: [],
  sex: '무관',
  image: [],
  title: '',
  description: '',
  headCount: 0,
  startDate: getDateNowString(),
  endDate: getDateNowString(),
  onOff: false,
  place: '',
  days: [],
  week: '',
  time: '',
  progressTime: '',
  acceptType: '선착순'
}

export const careerCreateGlobalState = atom({
  key: 'careerCreateGlobalState',
  default: initialCareerCreateData
})

// periodicMeeting: false, // 주기적 만남 체크는 클라단에서만 하기로 결정

// export const careerCreateGlobalState:  = atom({
//   key: 'careerCreateGlobalState',
//   default: {
//     // MeetupTypeSelecor1
//     category: '커리어', // 커리어, 근육 등
//     type: '', // 스터디, 프로젝트, 친목
//     // MeetupTypeSelecor2
//     jobs: [] as string[], // 경영, 개발 등
//     // RoleAndGender
//     positions: [] as string[], // 직급
//     sex: '무관', // 성별
//     image: [] as Blob[],
//     // MeetupTitleAndDescription
//     title: '',
//     description: '',
//     // RecruitmentSize
//     headCount: 0,
//     // RecruitmentPeriod
//     startDate: today, // "2023-09-18"
//     endDate: today, // "2023-09-20"

//     // MeeupDetails
//     onOff: false, // 온라인 오프라인
//     place: '', // 모임 장소
//     days: [] as string[], // 모임 요일
//     week: '', // 모임 주기 (매주, 격주, 매달)
//     time: '', // "10:00 AM"
//     progressTime: '', // "2 hours"
//     // MemberApprovalMethod
//     acceptType: '선착순'
//   }
// })
