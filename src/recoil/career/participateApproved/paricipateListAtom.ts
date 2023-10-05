import { atom } from 'recoil'

interface ParicipateListType {
  id: number
  nickname: string
  bio: string
  pr: string | any
}

export const paricipateListAtom = atom<ParicipateListType[]>({
  key: 'paricipateListAtom',
  default: [
    {
      id: 0,
      nickname: '',
      bio: '',
      pr: ''
    }
  ]
})
