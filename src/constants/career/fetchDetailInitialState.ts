import { fetchDetailProps } from '@/types/career/careerDetailProps'

export const fetchDetailInitialState: fetchDetailProps = {
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
  positions: ['사장', '사원'],
  sex: '여성',
  image: [''],
  title: '타이틀',
  description: 'Meeting Description',
  headCount: 10,
  recruitedPersonnel: 0,
  startDate: '2023-09-18T00:00:00.000+00:00',
  endDate: '2023-09-20T00:00:00.000+00:00',
  onOff: true,
  place: 'Meeting Place',
  week: '매주',
  days: ['월', '토'],
  time: '10:00 AM',
  progressTime: '2 hours',
  acceptType: '승인제',
  hits: 1,
  likes: 0,
  createdAt: '2023-09-26T17:56:43.916435',
  closing: false
}
