import { atom } from 'recoil'

interface EditImgae {
  file: Blob[] | null
}

export const editImagePreview = atom<EditImgae>({
  key: 'editImagePreview',
  default: {
    file: null
  }
})
