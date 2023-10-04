import { atom } from 'recoil'

interface MeetupImage {
  file: Blob[] | null
}

export const careerImageState = atom<MeetupImage>({
  key: 'careerImageState',
  default: {
    file: null
  }
})
