import { atom } from 'recoil'

export interface CareerSortGlobalStateProps {
  filter: any
}

export const careerSortGlobalState = atom<CareerSortGlobalStateProps>({
  key: 'careerSortGlobalState',
  default: {
    filter: '최신순'
  }
})
