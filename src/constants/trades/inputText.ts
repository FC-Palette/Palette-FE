import { Input, ImageBtn } from 'components/common/index'
import {
  DeadLine,
  AgreeMsg,
  Account
} from 'components/trades/uploadproduct/index'

export const TRADES_TEXT = [
  {
    title: '제목을 입력해주세요.',
    props: { ph: '', item: '' },
    component: Input
  },
  {
    title: '상품 카테고리를 선택해주세요.',
    props: { ph: '', item: '' },
    component: Input
  },
  {
    title: '제품의 구매사이트 URL 링크를 입력해주세요.',
    props: { ph: '해당 상품의 URL 링크를 복사해주세요.', item: '' },
    component: Input
  },
  {
    title: '모집 인원을 알려주세요.',
    props: { ph: 'ex) 10', item: '명' },
    component: Input
  },
  {
    title: '금액을 알려주세요.',
    props: { ph: '인당 부담 금액을 입력해 주세요.', item: '원' },
    component: Input
  },
  { title: '제품 이미지를 등록 해주세요.', component: ImageBtn },
  {
    title: '제품에 대한 상세 설명을 입력해주세요.',
    props: {
      ph: `TIP!
      \n수금은 어떻게 진행하실 건가요?
      \n어디서 상품을 나누실 건가요?
      \n왜 이상품을 공동구매 하시나요?`,
      item: ''
    },
    component: Input
  },
  { title: '마감시간을 설정해주세요.', component: DeadLine },
  { title: '공동구매 자동 마감 시점을 알려주세요.' },
  {
    title: `수금을 진행하실 
        \n금융기관과 계좌번호를 입력해 주세요.`,
    component: Account
  },
  {
    title: `공동구매 참여자들에게 재직 중인
      \n회사, 층수, 이름, 계좌번호 정보가 제공됩니다.`,
    component: AgreeMsg
  }
]

export const TRADES_ACCOUNT_TEXT = [
  '금융기관을 선택해주세요.',
  '계좌번호 입력',
  '계좌주 성명'
]

export const TRADES_CLOSING_TEXT = [
  '마감 일시 도달 시 자동 마감',
  '마감 인원 도달 시 자동 마감'
]
