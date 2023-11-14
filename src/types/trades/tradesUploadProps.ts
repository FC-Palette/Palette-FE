export interface TradeCreateGlobalStateProps {
  title: string
  description: string
  price: number
  category: string
  startDate: string
  endDate: string
  headCount: number
  closingType: string
  accountOwner: string
  accountNumber: string
  shopUrl: string
  bank: string
}

export interface SecondHandGlobalStateProps {
  title: string
  description: string
  price: number
  category: string
  isFree: boolean
  selectedDays: string[]
  transactionStartTime: string
  transactionEndTime: string
}

export interface TradesClosingProps {
  isClosing: boolean
  isSoldOut: boolean
}
export interface TradesModifyProps {
  description: string
  price: number
  startDate: string
  endDate: string
  headCount: number
  closingType: string
  accountOwner: string
  accountNumber: string
  shopUrl: string
  bank: string
}
