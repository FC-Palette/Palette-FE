import { GroupPurchaseResProps, SecondHandResProps } from 'types/trades/index'

export interface TradesSortedData extends GroupPurchaseResProps {}
export interface SecondHandSortedData extends SecondHandResProps {}

export enum TradesSortFilter {
  Latest = '최신순',
  Oldest = '오래된순',
  MostLiked = '찜 많은 순',
  LowPrice = '낮은 가격 순',
  HighPrice = '높은 가격 순'
}

export const TradesSortResponseData = (
  responseData: TradesSortedData[] | SecondHandSortedData[],
  filter: TradesSortFilter = TradesSortFilter.Latest
) => {
  const compareFunction = (a, b) => {
    switch (filter) {
      case TradesSortFilter.Latest:
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      case TradesSortFilter.Oldest:
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        )
      case TradesSortFilter.MostLiked:
        return b.bookmarkCount - a.bookmarkCount
      case TradesSortFilter.LowPrice:
        return a.price - b.price
      case TradesSortFilter.HighPrice:
        return b.price - a.price
      default:
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
    }
  }

  return [...responseData].sort(compareFunction)
}
