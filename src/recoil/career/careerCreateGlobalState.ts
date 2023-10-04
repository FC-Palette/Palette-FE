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
  sex: '',
  title: '',
  description: '',
  headCount: null,
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

// import { CareerCreateGlobaDataInterface } from '@/types'
// import { atom } from 'recoil'

// const getDateNowString = (): string => {
//   const dateNow = new Date()
//   return dateNow.toISOString().slice(0, 10)
// }

// const initialCareerCreateData: CareerCreateGlobaDataInterface = {
//   category: '커리어',
//   type: '',
//   jobs: [],
//   positions: [],
//   sex: '무관',
//   image: [],
//   title: '',
//   description: '',
//   headCount: 0,
//   startDate: getDateNowString(),
//   endDate: getDateNowString(),
//   onOff: false,
//   place: '',
//   days: [],
//   week: '',
//   time: '',
//   progressTime: '',
//   acceptType: '선착순'
// }

// export const careerCreateGlobalState = atom({
//   key: 'careerCreateGlobalState',
//   default: initialCareerCreateData
// })
