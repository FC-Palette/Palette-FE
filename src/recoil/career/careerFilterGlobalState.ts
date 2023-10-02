import { atom } from 'recoil'

interface CareerFilterGlobalStateProps {
  filter?: string
  onOff?: string | null
  type?: string | null
  job?: string[] | null
  position?: string[] | null
  sex?: string | null
}

export const careerFilterGlobalState = atom<CareerFilterGlobalStateProps>({
  key: 'careerFilterGlobalState',
  default: {
    filter: '',
    onOff: '',
    type: '',
    job: [],
    position: [],
    sex: ''
  }
})
