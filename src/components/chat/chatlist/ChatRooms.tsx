import { styled } from 'styled-components'
import { ChatRoom } from 'components/index'
import { useState, useLayoutEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getChatList } from 'api/index'
import { useParams } from 'react-router-dom'

export const ChatRooms = () => {
  const params = useParams()
  const chatwith = params.chattype as string
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  //authInstance를 통해 토큰값을 담아 고유하게 식별된 유저의 [채팅 리스트]를 g/p로 불러온다.
  //ReactQuery를 통해 탭을 통해 subpath가 바뀔 때 리페칭.
  const { data: rooms, isLoading } = useQuery(['chatRooms', chatwith], () => {
    return getChatList(chatwith)
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  console.log(rooms)
  return (
    <Wrapper $innerHeight={innerHeight}>
      {rooms &&
        rooms.response &&
        rooms.response.map(chatroom => (
          <ChatRoom
            key={chatroom.id}
            roomid={chatroom.id}
            title={chatroom.title}
            image={chatroom.image}
            members={chatroom.members}
            msg={chatroom.recentMessage}
            time={chatroom.recentTime}
            unread={chatroom.unRead}
          />
        ))}
    </Wrapper>
  )
}

export const Wrapper = styled.div<{ $innerHeight?: number }>`
  min-width: 375px;
  height: ${props => props.$innerHeight}px;
  overflow: scroll;
`
