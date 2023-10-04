import { atom } from 'recoil'

// export const fetchDetailRecommendState = atom({
//   key: 'fetchDetailRecommendState',
//   default: [
//     {
//       id: 1,
//       category: '커리어',
//       type: '스터디',
//       jobs: ['경영・비즈니스'],
//       positions: ['사장'],
//       sex: '남성',
//       image: ['더미 이미지'],
//       title: '타이틀',
//       description: '모임 소개',
//       headCount: 10,
//       recruitedPersonnel: 0,
//       startDate: '2023-09-18T00:00:00.000+00:00',
//       endDate: '2023-09-20T00:00:00.000+00:00',
//       onOff: true,
//       place: 'Meeting Place',
//       week: '매주',
//       days: ['월'],
//       time: '10:00 AM',
//       progressTime: '2 hours',
//       hits: 1,
//       likes: 0,
//       createdAt: '2023-09-26T17:56:43.916435',
//       closing: false
//     }
//   ]
// })
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
      closing: false
    }
  ]
})
