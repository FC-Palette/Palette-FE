import { atom } from 'recoil'
interface ResetImage {
  file: Blob[] | null
}
export const resetFileAtom = atom<ResetImage>({
  key: 'resetFileAtom',
  default: {
    file: null
  }
})
