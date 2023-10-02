import { atom } from 'recoil'

export interface CareerSortGlobalStateProps {
  filter?: string
  onOff?: string | null
  type?: string | null
  job?: string[] | null
  position?: string[] | null
  sex?: string | null
}

export const careerSortGlobalState = atom<CareerSortGlobalStateProps>({
  key: 'careerSortGlobalState',
  default: {
    filter: ''
  }
})
