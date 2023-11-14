export interface IconMapping {
  [key: string]: React.ReactNode
}
import {
  citibankLogo,
  cubankLogo,
  dgbankLogo,
  epostbankLogo,
  hanabankLogo,
  ibkbankLogo,
  kakaobankLogo,
  kbankLogo,
  kbbankLogo,
  kjbankLogo,
  knbankLogo,
  mgbankLogo,
  nhbankLogo,
  ourbankLogo,
  scbankLogo,
  shinhanbankLogo,
  suhyupbankLogo,
  tossbankLogo
} from 'src/public/index'

import {
  FolderOpen,
  UserCirlceAdd,
  MessageProgramming,
  Game,
  Moneys,
  Edit,
  Data,
  Brush2,
  PresentionChart,
  Video,
  Truck,
  SliderHorizontal,
  Shop,
  Profile2User,
  Health,
  Gameboy,
  Trade,
  Book,
  Setting2,
  ReceiptSearch,
  UserOctagon,
  Timer1,
  Calendar,
  ProfileAdd,
  Woman,
  Man,
  Glass,
  AddCircle,
  Apple,
  Calculator,
  Drop,
  Ticket,
  Clock,
  LikeTag,
  Monitor,
  Cake
} from 'iconsax-react'

export const iconMapping: IconMapping = {
  '경영・비즈니스': <FolderOpen />,
  '고객・영업': <UserCirlceAdd />,
  개발: <MessageProgramming />,
  '게임기획・개발': <Game />,
  '금융・컨설팅・VC': <Moneys />,
  교육: <Edit />,
  '데이터・AI∙ML': <Data />,
  디자인: <Brush2 />,
  '마케팅・광고・홍보': <PresentionChart />,
  '미디어・커뮤니케이션': <Video />,
  '물류・구매': <Truck />,
  '서비스기획・운영': <SliderHorizontal />,
  '이커머스・리테일': <Shop />,
  '인사・채용・노무': <Profile2User />,
  '의류・제약・바이오': <Health />,
  '회계・재무': <Gameboy />,
  '연구・개발': <Trade />,
  '법률・특허': <Book />,
  '엔지니어링・설계': <Setting2 />,
  '생산・품질': <ReceiptSearch />,
  모집기준: <UserOctagon />,
  모집인원: <Profile2User />,
  모집시간: <Timer1 />,
  모집기간: <Calendar />,
  멤버승인: <ProfileAdd />,
  남성만: <Man />,
  여성만: <Woman />
}
export const iconMapping1 = {
  HOUSEHOLD: {
    label: '생활용품',
    icon: <Glass />
  },
  OFFICE_SUPPLIES: {
    label: '사무용품',
    icon: <Calculator />
  },
  BEAUTY: {
    label: '뷰티',
    icon: <Drop />
  },
  TICKET: {
    label: '티켓/회원권',
    icon: <Ticket />
  },
  FASHION: {
    label: '패션/잡화',
    icon: <Clock />
  },
  PROCESSED_WELLNESS_FOODS: {
    label: '건강/가공식품',
    icon: <Cake />
  },
  SPORTS_LEISURE: {
    label: '스포츠/레저',
    icon: <LikeTag />
  },

  ELECTRONICS: {
    label: '가전/전자제품',
    icon: <Monitor />
  },
  BOOKS: {
    label: '도서',
    icon: <Book />
  },
  FOODS: {
    label: '식품',
    icon: <Apple />
  },
  ETC: {
    label: '기타',
    icon: <AddCircle />
  }
}

export const bankOptions = [
  {
    icon: citibankLogo,
    label: '한국씨티은행'
  },

  {
    icon: cubankLogo,
    label: '신협중앙회'
  },
  {
    icon: dgbankLogo,
    label: '대구은행'
  },
  {
    icon: epostbankLogo,
    label: '우체국'
  },
  {
    icon: hanabankLogo,
    label: '하나은행'
  },
  {
    icon: ibkbankLogo,
    label: '기업은행'
  },
  {
    icon: kakaobankLogo,
    label: '카카오뱅크'
  },
  {
    icon: kjbankLogo,
    label: '광주은행'
  },
  {
    icon: knbankLogo,
    label: '경남은행'
  },
  {
    icon: kbankLogo,
    label: '케이뱅크'
  },
  {
    icon: kbbankLogo,
    label: '국민은행'
  },
  {
    icon: mgbankLogo,
    label: '새마을금고'
  },
  {
    icon: nhbankLogo,

    label: '농협은행'
  },
  {
    icon: ourbankLogo,

    label: '우리은행'
  },
  {
    icon: scbankLogo,

    label: 'SC제일은행'
  },
  {
    icon: shinhanbankLogo,

    label: '신한은행'
  },
  {
    icon: suhyupbankLogo,

    label: '수협은행'
  },
  {
    icon: tossbankLogo,
    label: '토스뱅크'
  }
]
