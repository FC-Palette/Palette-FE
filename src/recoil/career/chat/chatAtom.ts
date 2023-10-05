import { atom } from 'recoil'

interface chatAtomType {
  type: string
  contentId: string
  participant: string
}

export const chatAtom = atom<chatAtomType>({
  key: 'chatAtom',
  default: {
    type: 'PESONAL',
    contentId: '',
    participant: ''
  }
})
