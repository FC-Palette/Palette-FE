export const CHAT_TEXTS = {
  header: '채팅',
  groupInfo: '참여인원',
  announcement: '공지',
  copy: '복사',
  register: '공지',
  annList: '공지목록',
  inDetail: '상세보기',
  sendImg: '이미지 전송하기',
  sendFile: '파일 전송하기',
  product: '상품 / 계좌정보',
  group: '모임정보',
  count: '명',
  account: '계좌번호'
}
export const CHAT_TABS = [
  { text: '단체톡', path: '/chatlist/g' },
  { text: '개인톡', path: '/chatlist/p' }
]

export const CHATON_TEXTS = {
  chatRoomExit: '채팅방 나가기',
  memberWarn:
    '채팅방을 나가시면 대화내용이 모두 삭제되며 가입된 모임에서도 나가집니다.',
  hostWarn:
    '참여중인 모임원들에게 알린 후 모임을 삭제하셔야 이후 모임활동에 불이익이 없어요! ',
  cancel: '취소',
  exit: '나가기',
  delete: '삭제',
  maintain: '유지하기',
  noToken: '회원정보를 확인할 수 없습니다. 로그인 후 이용해주세요',
  noRoomId: '잘못된 접근입니다.',
  register: '공지 등록하기',
  copy: '복사하기'
}

export const STATUS_TEXTS = {
  noGroup: '주최자가 삭제한 모임입니다.',
  noPurchase: '주최자가 삭제한 거래입니다.',
  noTrade: '판매자가 삭제한 거래입니다.'
}

/*
{
	"status": 200, 
	"success": true,
	"response": [
		{
			"memberId" : 1,
			"profileImgUrl" :https://avatars.githubusercontent.com/u/115582699?v=4 "https://",
			"nickName" : "고스트 사원"
			"text" : "안녕하세요",
	    "image?" : "https://", //type===IMAGE
	    "createdAt" : 23.09.18
	    "type" : "CHAT, IMAGE, FILE, LEAVE, JOIN, SHARE"
		},
		...
	] 
}
*/
export const messages = [
  {
    type: 'CHAT',
    memberId: 1,
    text: '보내는사람이매우긴메시지를보내는경우입니다띄어쓰기없이몇글자인지확인하실수있게안띄우고씁니다.근데이거길이제한은있어야할것같은데...',
    createdAt: '2023-09-25T10:23:01.758Z'
  },
  {
    type: 'SHARE',
    memberId: 1,
    text: '안녕하세요',
    createdAt: '2023-09-25T10:28:01.758Z',
    image: 'https://avatars.githubusercontent.com/u/115582699?v=4'
  },

  {
    type: 'CHAT',
    memberId: 1,
    text: '안녕하세요',
    createdAt: '2023-09-25T10:28:01.758Z'
  },

  {
    type: 'CHAT',
    memberId: 1,
    text: '10:28 같은 시간에 한번 더 안녕하세요. 시간이 보이지 않습니다. 근데 이러면 이렇게 너비를 풀로 차지하는 게 맞나......?',
    createdAt: '2023-09-25T10:28:01.758Z'
  },
  {
    type: 'CHAT',
    memberId: 1,
    text: '안녕하세요',
    createdAt: '2023-09-25T10:49:01.758Z'
  },
  {
    type: 'CHAT',
    memberId: 2,
    profileImgUrl: 'https://avatars.githubusercontent.com/u/115582699?v=4',
    nickName: '고스트 사원',
    text: '다른사람이매우긴메시지를보내는경우입니다띄어쓰기없이몇글자인지확인하실수있게안띄우고씁니다.',
    createdAt: '2023-09-25T11:13:01.758Z'
  },
  {
    type: 'SHARE',
    memberId: 2,
    profileImgUrl: 'https://avatars.githubusercontent.com/u/115582699?v=4',
    nickName: '고스트 사원',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 11:23 같은 시간이 보이지 않습니다.',
    createdAt: '2023-09-25T11:23:01.758Z',
    image: 'https://avatars.githubusercontent.com/u/115582699?v=4'
  },
  {
    type: 'CHAT',
    memberId: 2,
    profileImgUrl: 'https://avatars.githubusercontent.com/u/115582699?v=4',
    nickName: '감스트 사원',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 11:23 같은 시간이 보이지 않습니다.',
    createdAt: '2023-09-25T11:23:01.758Z'
  },
  {
    type: 'CHAT',
    memberId: 2,
    profileImgUrl: 'https://avatars.githubusercontent.com/u/115582699?v=4',
    nickName: '감스트',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 프로필사진이 보이지 않습니다.',
    createdAt: '2023-09-25T11:23:01.758Z'
  },
  {
    type: 'CHAT',
    memberId: 1,
    text: '아 시간 조건 까다롭네',
    createdAt: '2023-09-25T11:25:01.758Z'
  },
  {
    type: 'CHAT',
    memberId: 2,
    profileImgUrl: 'https://avatars.githubusercontent.com/u/115582699?v=4',
    nickName: '고스트 사원',
    text: '11:47에 다른 사람이 안녕하세요',
    createdAt: '2023-09-26T11:47:01.758Z'
  },
  {
    type: 'LEAVE',
    memberId: -1,
    text: '현하님이 퇴장하셨습니다.',
    createdAt: '2023-09-27T11:47:01.758Z'
  },
  {
    type: 'CHAT',
    memberId: 1,
    text: '11:47에 내가 같은 시간에 한번 더 안녕하세요를 입력할 때는 다른 사람이 보냈으므로 시간이 나타납니다.',
    createdAt: '2023-09-27T11:47:01.758Z'
  },
  {
    type: 'JOIN',
    memberId: -1,
    text: '지민님이 입장하셨습니다.',
    createdAt: '2023-09-27T11:47:01.758Z'
  },
  {
    type: 'JOIN',
    memberId: -1,
    text: '중후님이 입장하셨습니다.',
    createdAt: '2023-09-27T11:47:01.758Z'
  },
  {
    type: 'LEAVE',
    memberId: -1,
    text: '지민님이 퇴장하셨습니다.',
    createdAt: '2023-09-27T11:47:01.758Z'
  }
]

export const chatroomsdata = {
  status: 200,
  success: true,
  response: [
    {
      roomId: 1,
      title: '모임톡방',
      image: 'https://avatars.githubusercontent.com/u/115582699?v=4',
      members: 3,
      recentMessage: '안녕하세요',
      recentTime: '2023-09-25T11:13:01.758Z',
      unRead: 100
    },
    {
      roomId: 2,
      title:
        '모임톡방이름모임톡방이름모임톡방이름모임톡방이름모임톡방 이름모임톡방 이름',
      image: 'https://avatars.githubusercontent.com/u/115582699?v=4',
      members: 3,
      recentMessage:
        '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
      recentTime: '2023-09-25T19:00:01.758Z',
      unRead: 100
    },
    {
      roomId: 3,
      title: '모임톡방 이름',
      image: 'https://avatars.githubusercontent.com/u/115582699?v=4',
      members: 3,
      recentMessage: '안녕하세요',
      recentTime: '2023-09-25T11:13:01.758Z',
      unRead: 100
    },

    {
      roomId: 4,
      title: '모임톡방 이름',
      image: 'https://avatars.githubusercontent.com/u/115582699?v=4',
      members: 3,
      recentMessage: '안녕하세요',
      recentTime: '2023-09-25T11:13:01.758Z',
      unRead: 100
    }
  ]
}

export const anns = [
  {
    noticeId: 1,
    notice:
      'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴasdsasadasaasdsadsadasdsadasdasdasdaadsdsadasdasdasdasdasdasdsadasdasdasdasdasdㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ',
    createdAt: '12:34 ',
    memberId: '고스트사원',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 2,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },

  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  },
  {
    noticeId: 3,
    notice: 'ㅁㄴㅇ',
    createdAt: '12:34',
    memberId: '프론트엔드 개발자',
    profileImageUrl: '',
    host: 2
  }
]
