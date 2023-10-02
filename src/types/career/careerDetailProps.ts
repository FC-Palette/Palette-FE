export interface fetchDetailProps {
  meetingMemberResponseDto: {
    nickname: string
    bio: string
    image: null | string
  }
  id: number
  category: string
  type: string
  jobs: string[]
  positions: string[]
  sex: string
  image: string[]
  title: string
  description: string
  headCount: number
  recruitedPersonnel: number
  startDate: string
  endDate: string
  onOff: boolean
  place: string
  week: string
  days: string[]
  time: string
  progressTime: string
  acceptType: string
  hits: number
  likes: number
  createdAt: string
  closing: boolean
  meetingMemberDto: any
}

