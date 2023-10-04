export interface IconMapping {
  [key: string]: React.ReactNode
}

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
  '개발': <MessageProgramming />,
  '게임기획・개발': <Game />,
  '금융・컨설팅・VC': <Moneys />,
  '교육': <Edit />,
  '데이터・AI∙ML': <Data />,
  '디자인': <Brush2 />,
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
  HEALTH_AND_FOOD: {
    label: '건강/가공식품',
    icon: <Cake />
  },
  INTERIOR: {
    label: '인테리어',
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
  PROCESSED_WELLNESS_FOODS: {
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
    // icon: process.env.PUBLIC_URL + '/public/bankLogos/citibank.png',
    label: '한국씨티은행'
  },
  {
    // icon: process.env.PUBLIC_URL + '/public/bankLogos/cubank.png',
    label: '신협중앙회'
  },
  {
    // icon: process.env.PUBLIC_URL + '/public/bankLogos/dgbank.png',
    label: '대구은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/epostbank.png',
    label: '우체국'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/hanabank.png',
    label: '하나은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/ibkbank.png',
    label: '기업은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/kakaobank.png',
    label: '카카오 뱅크'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL + '/public/bankLogos/kbank.png',
    label: '케이뱅크'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/kbbank.png',
    label: '국민은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/mgbank.png',
    label: '새마을금고'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/nhbank.png',
    label: '농협'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/ourbank.png',
    label: '우리은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/scbank.png',
    label: 'SC제일은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/shinhanbank.png',
    label: '신한은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/suhyupbank.png',
    label: '수협은행'
  },
  {
    // icon:
    //   import.meta.env.VITE_REACT_APP_PUBLIC_URL +
    //   '/public/bankLogos/tossbank.png',
    label: '토스뱅크'
  }
]
