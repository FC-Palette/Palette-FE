export interface CareerCreateGlobaDataInterface {
  category: string | any // 커리어, 근육 등
  type: string | any // 스터디, 프로젝트, 친목
  jobs: string[] | any // 경영, 개발 등
  positions: string[] | any // 직급
  sex: string | any //성별
  title: string | any // 모임 제목
  description: string | any // 모임 소개
  headCount: number | any // 모집 인원 수
  startDate: string | any // "2023-09-18"
  endDate: string | any // "2023-09-20"
  onOff: boolean | any // 온라인 오프라인
  place: string | any // 모임 장소
  days: string[] | any // 모임 요일
  week: string | any // 모임 주기 (매주, 격주, 매달)
  time: string | any // "10:00 AM"
  progressTime: string | any // "2 hours"
  acceptType: string | any // 선착순
}
