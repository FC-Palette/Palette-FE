//공동구매 리스트타입

export interface GroupPurchaseResProps {
  id: number
  title: string
  category: string
  price: number
  thumbnailUrl: string
  hits: number
  bookmarkCount?: number
}

// 오류 응답 데이터 타입
export interface ErrorPurchaseResponseData {
  message: string
}

// 응답 데이터 타입
export interface GroupPurchaseListResProps {
  status: number
  success: boolean
  response: GroupPurchaseResProps[]
  error: ErrorPurchaseResponseData | null
}

// 공동구매 상세보기 페이지 타입
export interface GroupPurchaseDetailResProps {
  id: number
  member: {
    id: number
    nickname: string
    bio: string
    image: null | string
  }
  headCount: number
  bookmarkCount: number
  shopUrl: string
  image: {
    url: string
  }[]
  title: string
  category: string
  startDate: string
  endDate: string
  description: string
  price: number
  thumbnailUrl: string
  hits: number
  currentParticipantCount: number
  isClosing: boolean
  createdAt: string
  isParticipating: boolean
}

export interface GroupPurchaseListDetailViewResProps {
  status: number
  success: boolean
  response: GroupPurchaseDetailResProps[] | null
  error: null | { message: string }
}
