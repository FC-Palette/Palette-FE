import { styled } from 'styled-components'
import { ChatRoom } from 'components/index'
import { useState, useLayoutEffect } from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { getChatList, authInstance } from 'api/index'
// import { useParams } from 'react-router-dom'
import { chatroomsdata } from 'constants/index'
/*
{
	"status": 200, 
	"success": true,
	"response": [
		{
			"roomId" : 1,   => <ChatOn /> connect시 필수
			"title" : "모임톡방 이름",   => <PreviewTitle />
	    "image" : "https://",   => <ChatRoomImg />
			"members" : 3,   => <PreviewTitle />
			"recentMessage" : "안녕하세요", => <PreviewContent />
	    "recentTime" : 23.09.18   => <UnreadTime />
	    "unRead" : 100   => <UnreadCount />
		},
		...
	] 
}
*/
// const [HTTP] = [import.meta.env.VITE_BASE_URL]

export const ChatRooms = () => {
  // const params = useParams()
  // const chatwith = params.chattype as string
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  //authInstance를 통해 토큰값을 담아 고유하게 식별된 유저의 [채팅 리스트]를 g/p로 불러온다.
  //ReactQuery를 통해 탭을 통해 subpath가 바뀔 때 리페칭.
  // const { data, isLoading, isError } = useQuery(['chatRooms', chatwith], () => {
  //   getChatList(chatwith)
  //   console.log(data)
  //   console.log(chatwith)
  //   console.log(isError)
  //   console.log(isLoading)
  // })
  // useEffect(() => {
  //   getChatList(chatwith)
  // }, [])

  return (
    <Wrapper $innerHeight={innerHeight}>
      {chatroomsdata.response.map(chatroom => (
        <ChatRoom
          key={chatroom.roomId}
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
