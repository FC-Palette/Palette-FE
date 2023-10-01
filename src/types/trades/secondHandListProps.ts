//중고거래 리스트호출

export interface SecondHandResProps {
  id: number
  title: string
  category: string
  price: number
  thumbnailUrl: string
  hits: number
  bookmarkCount?: number
}

// 오류 응답 데이터 타입
export interface ErrorResponseData {
  message: string
}

// 응답 데이터 타입
export interface SecondHandListResProps {
  status: number
  success: boolean
  response: SecondHandResProps[] | null
  error: ErrorResponseData | null
}

//중고거래 상세보기 페이지

export interface SecondHandDetailResProps {
  id: number
  member: {
    id: number
    nickname: string
    bio: string
    image: null | string
  }
  bookmarkCount: number
  images: {
    url: string
  }[]
  title: string
  category: string
  transactionStartTime: string
  transactionEndTime: string
  description: string
  price: number
  hits: number
  isSoldOut: boolean
  isFree: boolean
  createdAt: string
}

export interface SecondHandDetailViewRes {
  status: number
  success: boolean
  response: SecondHandDetailResProps
  error: null | { message: string }
}
