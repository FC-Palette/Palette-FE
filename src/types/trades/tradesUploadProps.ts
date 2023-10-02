export interface TradeCreateGlobalStateProps {
  image: Blob[]
  title: string
  description: string
  price: number
  category: string
  startDay: string
  endDay: string
  timeRemaining: string
  headCount: number
  closingType: string
  accountOwner: string
  accountNumber: string
  shopUrl: string
  bank: string
}

export interface SecondHandGlobalStateProps {
  images: Blob[]
  title: string
  description: string
  price: number
  category: string
  isFree: boolean
  selectedDays: string[]
  transactionStartTime: string
  transactionEndTime: string
}
