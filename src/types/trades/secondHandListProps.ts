//중고거래 리스트호출

export interface SecondHandResProps {
  id: number
  title: string
  category: string
  price: number
  thumbnailUrl: string
  hits: number
  bookmarkCount: number
  isBookmarked: boolean
  isSoldOut?: boolean
  created_at: string
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
    image: string | null
  }
  bookmarkCount: number
  images: string[]
  title: string
  category: string
  isBookmarked: boolean
  transactionStartTime: string
  transactionEndTime: string
  description: string
  price: number
  hits: number
  isSoldOut: boolean
  isFree: boolean
  createdAt: string
  anotherProductDtos: {
    id: number
    title: string
    price: number
    thumbnailUrl: string
  }[]
}

export interface SecondHandDetailViewRes {
  status: number
  success: boolean
  response: SecondHandDetailResProps
  error: null | { message: string }
}
