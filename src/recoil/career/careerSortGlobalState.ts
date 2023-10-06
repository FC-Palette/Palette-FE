import { atom } from 'recoil'

export interface CareerSortGlobalStateProps {
  filter: any
}

export const careerSortGlobalState = atom<CareerSortGlobalStateProps>({
  key: 'careerSortGlobalState',
  default: {
    filter: ''
  }
})
export const purchaseSortGlobalState = atom<CareerSortGlobalStateProps>({
  key: 'purchaseSortGlobalState',
  default: {
    filter: ''
  }
})
