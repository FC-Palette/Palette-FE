import { atom } from 'recoil'

export const modalOnState = atom<boolean>({
  key: 'modalOnState',
  default: false
})

export const showMembersState = atom<boolean>({
  key: 'showMembersState',
  default: false
})

export const inDetailState = atom<boolean>({
  key: 'inDetailState',
  default: false
})

export const isBuyingState = atom<boolean>({
  key: 'isByuyingState',
  default: true
})

export const sendFileState = atom<boolean>({
  key: 'sendFileState',
  default: false
})

export const isPersonalState = atom<boolean>({
  key: 'isPersonalState',
  default: false
})

export const msgActionsState = atom<number>({
  key: 'msgActionsState',
  default: -1
})
