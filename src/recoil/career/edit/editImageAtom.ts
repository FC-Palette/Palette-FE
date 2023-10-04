import { atom } from 'recoil'
interface EditImage {
  file: Blob[] | null
}
export const editImageAtom = atom<EditImage>({
  key: 'editImageAtom',
  default: {
    file: null
  }
})
