import { CareerCreateGlobaDataInterface } from '@/types'
import { atom } from 'recoil'

const getDateNowString = (): string => {
  const dateNow = new Date()
  return dateNow.toISOString().slice(0, 10)
}

export const resetDtoAtom = atom<CareerCreateGlobaDataInterface>({
  key: 'resetDtoAtom',
  default: {
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
})
