import { atom } from 'recoil'

export const fetchDetailRecommendState = atom({
  key: 'fetchDetailRecommendState',
  default: [
    {
      id: 1,
      category: '',
      type: '',
      jobs: [''],
      positions: [''],
      sex: '',
      image: [''],
      title: '',
      description: '',
      headCount: 10,
      recruitedPersonnel: 0,
      startDate: '',
      endDate: '',
      onOff: true,
      place: '',
      week: '',
      days: [''],
      time: '',
      progressTime: '',
      hits: 1,
      likes: 0,
      createdAt: '',
      closing: false,
      likemsg: false
    }
  ]
})
