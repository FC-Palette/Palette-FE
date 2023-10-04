import { atom } from 'recoil'

export const fetchDetailMemberState = atom({
  key: 'fetchDetailMemberState',
  default: [
    {
      nickname: '닉네임',
      bio: '안녕하세요.',
      image: null
    },
    {
      nickname: '닉네임',
      bio: '안녕하세요.',
      image: null
    },
    {
      nickname: '닉네임',
      bio: '안녕하세요.',
      image: null
    }
  ]
})
