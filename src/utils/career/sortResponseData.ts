export interface SortedData {
  createdAt: string
  likes: number
  startDate: string
}

export const sortResponseData = (responseData: [], filter?: string) => {
  const compareFunction = (a: SortedData, b: SortedData) => {
    switch (filter) {
      case '최신순':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case '오래된순':
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case '찜 많은 순':
        return b.likes - a.likes
      case '모임시작일 순':
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  }

  return [...responseData].sort(compareFunction)
}
