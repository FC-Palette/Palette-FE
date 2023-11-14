import { atom } from 'recoil'
import {
  TradeCreateGlobalStateProps,
  SecondHandGlobalStateProps,
  TradesModifyProps
} from 'types/trades/index'

const dateNow = new Date()
const today = dateNow.toISOString().slice(0, 10)

export const tradescreateglobalstate = atom<TradeCreateGlobalStateProps>({
  key: 'tradesGlobalState',
  default: {
    title: '',
    description: '',
    price: 0,
    category: '',
    startDate: today,
    endDate: today,
    headCount: 0,
    closingType: '',
    accountOwner: '',
    accountNumber: '',
    shopUrl: '',
    bank: ''
  }
})

export const secondhandcreateglobalstate = atom<SecondHandGlobalStateProps>({
  key: 'secondHandGlobalState',
  default: {
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
  title: '',
  description: '',
  price: 0,
  category: '',
  startDate: today,
  endDate: today,
  headCount: 0,
  closingType: 'DATETIME' || 'HEAD_COUNT',
  accountOwner: '',
  accountNumber: '',
  shopUrl: '',
  bank: ''
}

// secondhandcreateglobalstate 초기값
export const initialSecondHandGlobalState: SecondHandGlobalStateProps = {
  title: '',
  description: '',
  price: 0,
  category: '',
  isFree: false,
  selectedDays: [] as string[],
  transactionStartTime: '',
  transactionEndTime: ''
}

interface CreateFile {
  file: Blob[] | null
}

export const ImageState = atom<CreateFile>({
  key: 'imageGlobalState',
  default: {
    file: null
  }
})

export const initialImageState: CreateFile = {
  file: []
}

interface EditFile {
  file: Blob[] | null
}

export const initialImageEdit: EditFile = {
  file: []
}

export const initialeditSecondHandImage: EditFile = {
  file: []
}

interface EditImage {
  file: Blob[] | null
}

interface RemoveImageProps {
  urls: string[] | null
}

export const RemoveImage = atom<RemoveImageProps>({
  key: 'removeImageState',
  default: {
    urls: [] as string[] | null
  }
})

export const editPurchaseImage = atom<EditImage>({
  key: 'editImageState',
  default: {
    file: null
  }
})

export const editSecondHandImage = atom<EditImage>({
  key: 'editSecondHandState',
  default: {
    file: null
  }
})

export const RemoveSecondHandImage = atom<RemoveImageProps>({
  key: 'removeSecondHandImageState',
  default: {
    urls: [] as string[] | null
  }
})

export const tradesModifyGlobalState = atom<TradesModifyProps>({
  key: 'tradesModify',
  default: {
    shopUrl: '',
    startDate: today,
    endDate: today,
    headCount: 0,
    price: 0,
    description: '',
    closingType: 'DATETIME' || 'HEAD_COUNT',
    bank: '',
    accountNumber: '',
    accountOwner: ''
  }
})

// tradescreateglobalstate 초기값
export const initialTradeModifyGlobalState: TradesModifyProps = {
  shopUrl: '',
  startDate: today,
  endDate: today,
  headCount: 0,
  price: 0,
  description: '',
  closingType: 'DATETIME' || 'HEAD_COUNT',
  bank: '',
  accountNumber: '',
  accountOwner: ''
}

interface filterProps {
  minPrice: number
  maxPrice: number
  category: string[] | null
}

interface SecondHandfilterProps {
  category: string[] | null
}

export const TradesFilterState = atom<filterProps>({
  key: 'tradesFilterGlobalState',
  default: {
    category: [],
    minPrice: 0,
    maxPrice: 100000
  }
})
export const SecondHandFilterState = atom<SecondHandfilterProps>({
  key: 'secondHandFilterGlobalState',
  default: {
    category: []
  }
})

export const FilteredDataState = atom({
  key: 'filteredData',
  default: [] as string[]
})

export const TradesFilterDataState = atom({
  key: 'tradesFilterData',
  default: [] as string[]
})

export const ListCountState = atom({
  key: 'countState',
  default: 0
})
export const SecondHandCountState = atom({
  key: 'secondHandCount',
  default: 0
})
