import { atom } from 'recoil'

export const modalOnState = atom<boolean>({
  key: 'modalOnState',
  default: false
})

export const showMembersState = atom<boolean>({
  key: 'showMembersState',
  default: true
})
