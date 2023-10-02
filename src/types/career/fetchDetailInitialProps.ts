export interface CareerCreateGlobaDataInterface {
  category: string // 커리어, 근육 등
  type: string // 스터디, 프로젝트, 친목
  jobs: string[] // 경영, 개발 등
  positions: string[] // 직급
  sex: string // 성별
  image: Blob[]
  title: string // 모임 제목
  description: string // 모임 소개
  headCount: number // 모집 인원 수 
  startDate: string // "2023-09-18"
  endDate: string // "2023-09-20"
  onOff: boolean // 온라인 오프라인
  place: string // 모임 장소
  days: string[] // 모임 요일
  week: string // 모임 주기 (매주, 격주, 매달)
  time: string // "10:00 AM"
  progressTime: string // "2 hours"
  acceptType: string // 선착순
}
