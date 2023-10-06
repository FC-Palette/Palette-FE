export interface SortedData {
  createdAt: string
  likes: number
  startDate?: string
  price: number
}

export enum SortFilter {
  Latest = '최신순',
  Oldest = '오래된순',
  MostLiked = '찜 많은 순',
  StartDate = '모임시작일 순',
  LowPrice = '가격 낮은 순',
  HighPrice = '가격 높은 순'
}

export const sortResponseData = (
  responseData: SortedData[],
  filter: SortFilter = SortFilter.Latest
) => {
  const compareFunction = (a: SortedData, b: SortedData) => {
    switch (filter) {
      case SortFilter.Latest:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case SortFilter.Oldest:
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      case SortFilter.MostLiked:
        return b.likes - a.likes
      case SortFilter.StartDate:
        return (
          (a.startDate ? new Date(a.startDate).getTime() : 0) -
          (b.startDate ? new Date(b.startDate).getTime() : 0)
        )
      case SortFilter.LowPrice:
        return a.price - b.price
      case SortFilter.HighPrice:
        return b.price - a.price
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  }

  return [...responseData].sort(compareFunction)
}
