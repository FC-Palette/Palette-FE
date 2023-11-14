import { Input } from 'components/common/index'
import {
  AgreeMsg1,
  AgreeMsg2,
  Account,
  UploadInputDetail,
  DeadLine,
  PurchaseImages,
  PurchaseOption,
  SecondHandOption,
  SecondHandImages,
  SecondHandDay,
  SecondHandTime,
  ClosingDate,
  UploadInputDetail1
} from 'components/trades/upload/index'
import {
  EditAccount,
  EditOption,
  EditDeadLine,
  EditClosingDate,
  EditDescription,
  EditImage,
  EditSecondHandImage
} from 'components/trades/edit/index'

export const TRADES_TEXT = [
  {
    title: '제목을 입력해주세요.',
    props: { ph: '제목을 입력해주세요.', item: '' },
    component: Input,
    field: 'title'
  },
  {
    title: '상품 카테고리를 선택해주세요.',
    props: { ph: '상품 카테고리를 선택해주세요.', item: '' },
    component: PurchaseOption
  },
  {
    title: '제품의 구매사이트 URL 링크를 입력해주세요.',
    props: { ph: '해당 상품의 URL 링크를 복사해주세요.', item: '' },
    component: Input,
    field: 'shopUrl'
  },
  {
    title: '모집 인원을 알려주세요.',
    props: { ph: 'ex) 10', item: '명' },
    component: Input,
    field: 'headCount',
    type: 'number'
  },
  {
    title: '금액을 알려주세요.',
    props: { ph: '인당 부담 금액을 입력해 주세요.', item: '원' },
    component: Input,
    field: 'price',
    type: 'number'
  },
  {
    title: '제품 이미지를 등록 해주세요.',
    component: PurchaseImages
  },
  {
    title: '제품에 대한 상세 설명을 입력해주세요.',
    component: UploadInputDetail
  },
  { title: '마감일자를 설정해주세요.', component: DeadLine },

  { title: '공동구매 자동 마감 시점을 알려주세요.', component: ClosingDate },

  {
    title: `수금을 진행하실 
    \n금융기관과 계좌번호를 입력해 주세요.`,
    type: 'number',
    component: Account
  },
  {
    title: `공동구매 참여자들에게 재직 중인
      \n회사, 층수, 이름, 계좌번호 정보가 제공됩니다.`,
    component: AgreeMsg1
  }
]

export const TRADES_SECONDHAND_TEXT = [
  {
    title: '제목을 입력해주세요.',
    props: { ph: '제목을 입력해주세요.', item: '' },
    component: Input,
    field: 'title'
  },
  {
    title: '상품 카테고리를 선택해주세요.',
    props: { ph: '상품 카테고리를 선택해주세요.', item: '' },
    component: SecondHandOption
  },
  {
    title: '금액을 알려주세요.',
    props: { ph: '부담 금액을 입력해주세요.', item: '원' },
    component: Input,
    field: 'price',
    type: 'number'
  },
  {
    title: '거래가능 요일을 정해주세요.',
    component: SecondHandDay
  },

  {
    title: '거래가능한 시간을 설정해주세요.',
    component: SecondHandTime
  },
  {
    title: '제품 이미지를 등록 해주세요.',
    component: SecondHandImages
  },
  {
    title: '제품에 대한 상세 설명을 입력해주세요.',
    component: UploadInputDetail1
  },
  {
    title: ``,
    component: AgreeMsg2
  }
]

export const EDIT_TRADES_TEXT = [
  {
    title: '제목을 입력해주세요.',
    props: { ph: '제목 및 카테고리는 수정불가능합니다.', item: '' },
    component: Input,
    field: 'title'
  },
  {
    title: '상품 카테고리를 선택해주세요.',
    props: { ph: '상품 카테고리를 선택해주세요.', item: '' },
    component: EditOption
  },
  {
    title: '제품의 구매사이트 URL 링크를 입력해주세요.',
    props: { ph: '해당 상품의 URL 링크를 복사해주세요.', item: '' },
    component: Input,
    field: 'shopUrl'
  },
  {
    title: '모집 인원을 알려주세요.',
    props: { ph: 'ex) 10', item: '명' },
    component: Input,
    field: 'headCount',
    type: 'number'
  },
  {
    title: '금액을 알려주세요.',
    props: { ph: '인당 부담 금액을 입력해 주세요.', item: '원' },
    component: Input,
    field: 'price',
    type: 'number'
  },
  {
    title: '제품 이미지를 등록 해주세요.',
    component: EditImage
  },
  {
    title: '제품에 대한 상세 설명을 입력해주세요.',
    component: EditDescription
  },
  { title: '마감일자를 설정해주세요.', component: EditDeadLine },

  {
    title: '공동구매 자동 마감 시점을 알려주세요.',
    component: EditClosingDate
  },

  {
    title: `수금을 진행하실 
    \n금융기관과 계좌번호를 입력해 주세요.`,
    type: 'number',
    component: EditAccount
  },
  {
    title: `공동구매 참여자들에게 재직 중인
      \n회사, 층수, 이름, 계좌번호 정보가 제공됩니다.`,
    component: AgreeMsg1
  }
]

export const EDIT_SECONDHAND_TEXT = [
  {
    title: '제목을 입력해주세요.',
    props: { ph: '제목을 입력해주세요.', item: '' },
    component: Input,
    field: 'title'
  },
  {
    title: '상품 카테고리를 선택해주세요.',
    props: { ph: '상품 카테고리를 선택해주세요.', item: '' },
    component: SecondHandOption
  },
  {
    title: '금액을 알려주세요.',
    props: { ph: '부담 금액을 입력해주세요.', item: '원' },
    component: Input,
    field: 'price',
    type: 'number'
  },
  {
    title: '거래가능 요일을 정해주세요.',
    component: SecondHandDay
  },

  {
    title: '거래가능한 시간을 설정해주세요.',
    component: SecondHandTime
  },
  {
    title: '제품 이미지를 등록 해주세요.',
    component: EditSecondHandImage
  },
  {
    title: '제품에 대한 상세 설명을 입력해주세요.',
    component: UploadInputDetail1
  },
  {
    title: ``,
    component: AgreeMsg2
  }
]
