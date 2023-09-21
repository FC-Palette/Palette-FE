import { Header, ChatAnnListItems, ChatAnnListItem } from 'components/index'
import { StyledIcon } from 'pages/index'
import { styled } from 'styled-components'
import { ArrowLeft2, Add } from 'iconsax-react'
const anns = [
  {
    id: 1,
    content:
      'ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴasdsasadasaasdsadsadasdsadasdasdasdaadsdsadasdasdasdasdasdasdsadasdasdasdasdasdㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ',
    time: '12:34 ',
    publisher: '고스트사원'
  },
  { id: 2, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' },
  { id: 3, content: 'ㅁㄴㅇ', time: '12:34', publisher: '프론트엔드 개발자' }
]

export const ChatAnnList = () => {
  return (
    <>
      <Header
        centerText="공지목록"
        leftIcon={
          <Add
            onClick={() => {
              console.log('tq')
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
