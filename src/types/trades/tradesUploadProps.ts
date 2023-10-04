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
