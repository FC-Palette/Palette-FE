import { atom } from 'recoil'

export const fetchDetailGlobalState = atom({
  key: 'fetchDetailGlobalState',
  default: {
    meetingMemberDto: {
      id: 0,
      nickname: '요한이',
      bio: '안녕하세요',
      image: null
    },
    id: 1,
    category: '커리어',
    type: '스터디',
    jobs: ['경영・비즈니스', '서비스기획・운영'],
    positions: [],
    sex: '여성',
    image: [''],
    title: '',
    description: 'Meeting Description',
    headCount: 10,
    recruitedPersonnel: 0,
    startDate: '2023-09-18T00:00:00.000+00:00',
    endDate: '2023-09-20T00:00:00.000+00:00',
    onOff: true,
    place: 'Meeting Place',
    week: '모임 주기가 설정되지 않얐습니다.',
    days: ['월', '토'],
    time: '10:00 AM',
    progressTime: '2 hours',
    acceptType: '승인제',
    hits: 1,
    likes: 0,
    createdAt: '2023-09-26T17:56:43.916435',
    closing: false,
    msg: ''
  }
})
