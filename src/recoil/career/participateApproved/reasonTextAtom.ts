import { atom } from 'recoil'

interface PrType {
  pr: string | any
}

export const reasonTextAtom = atom<PrType>({
  key: 'reasonTextAtom',
  default: {
    pr: ''
  }
})
