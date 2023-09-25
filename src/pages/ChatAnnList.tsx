import { Header, ChatAnnListItems, ChatAnnListItem } from 'components/index'
import { useNavigate } from 'react-router-dom'

import { ArrowLeft2 } from 'iconsax-react'

const anns = [
  {
    id: 1,
    content:
      'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴasdsasadasaasdsadsadasdsadasdasdasdaadsdsadasdasdasdasdasdasdsadasdasdasdasdasdㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ',
    time: '12:34 ',
    publisher: '고스트사원'
  },
  { id: 2, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },

  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' }
]

export const ChatAnnList = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header
        centerText="공지목록"
        leftIcon={
          <ArrowLeft2
            cursor="pointer"
            onClick={() => {
              navigate('/chat')
            }}
          />
        }></Header>
      <ChatAnnListItems>
        {anns.map(({ id, content, time, publisher }) => (
          <ChatAnnListItem
            key={id}
            content={content}
            time={time}
            publisher={publisher}
          />
        ))}
      </ChatAnnListItems>
    </>
  )
}
