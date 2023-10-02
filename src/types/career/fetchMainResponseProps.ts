// 성공 응답 데이터 타입
export interface fetchMainResponseProps {
  id?: number
  category?: string // 커리어, 근육 등
  type?: string // 스터디, 프로젝트, 친목
  jobs?: string[] // 경영, 개발 등
  positions?: string[] // 직급
  sex?: string // 성별
  image?: string[] // 이미지
  title?: string // 모임제목
  description?: string // 모임 소개
  headCount?: number // 모집 인원수
  recruitedPersonnel?: number // 모집된 인원수
  startDate?: string // 시작일
  endDate?: string // 종료일
  onOff?: boolean // 온, 오프라인
  place?: string // 모임장소
  week?: string // 모임 주기
  days?: string[] // 모임 요일
  time?: string // 모임 시간
  progressTime?: string // 진행시간
  hits?: number // 조회수
  likes?: number // 좋아요 수
  createdAt?: string // 생성일 "2023-09-26T16:16:27.138517",
  closing?: boolean // 모집된건지 마감인지
}
