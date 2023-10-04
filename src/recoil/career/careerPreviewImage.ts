import { atom } from 'recoil'

interface MeetupImage {
  id: string
  url: string
  blob: Blob | null
}

export const careerPreviewImage = atom<MeetupImage>({
  key: 'careerPreviewImage',
  default: {
    id: '',
    url: '',
    blob: null
  }
})
