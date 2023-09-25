import { atom } from 'recoil'
import {
  TradeCreateGlobalStateProps,
  SecondHandGlobalStateProps
} from 'types/trades/index'

const dateNow = new Date()
const today = dateNow.toISOString().slice(0, 10)

export const tradescreateglobalstate = atom<TradeCreateGlobalStateProps>({
  key: 'tradesGlobalState',
  default: {
    selectedItem: '공동구매',
    images: [] as Blob[],
    title: '',
    description: '',
    price: 0,
    category: '',
    startDay: today,
    endDay: today,
    timeRemaining: '',
    headCount: 0,
    closingType: 'DATETIME' || 'HEAD_COUNT',
    accountOwner: '',
    accountNumber: '',
    shopUrl: '',
    bank: ''
  }
})

export const secondhandcreateglobalstate = atom<SecondHandGlobalStateProps>({
  key: 'secondHandGlobalState',
  default: {
    selectedItem: '중고거래',
    tradesImages: [] as Blob[],
    title: '',
    description: '',
    price: 0,
    category: '',
    isFree: false,
    selectedDays: [] as string[],
    transactionStartTime: '',
    transactionEndTime: ''
  }
})

// tradescreateglobalstate 초기값
export const initialTradeCreateGlobalState: TradeCreateGlobalStateProps = {
  selectedItem: '공동구매',
  images: [] as Blob[],
  title: '',
  description: '',
  price: 0,
  category: '',
  startDay: today,
  endDay: today,
  timeRemaining: '',
  headCount: 0,
  closingType: 'DATETIME' || 'HEAD_COUNT',
  accountOwner: '',
  accountNumber: '',
  shopUrl: '',
  bank: ''
}

// secondhandcreateglobalstate 초기값
export const initialSecondHandGlobalState: SecondHandGlobalStateProps = {
  selectedItem: '중고거래',
  tradesImages: [] as Blob[],
  title: '',
  description: '',
  price: 0,
  category: '',
  isFree: false,
  selectedDays: [] as string[],
  transactionStartTime: '',
  transactionEndTime: ''
}
