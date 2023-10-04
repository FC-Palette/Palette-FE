import { ChatRoomInfo, UnreadInfo } from 'components/index'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { rowCentralise } from 'styles/index'
import { useSetRecoilState } from 'recoil'
import { roomIdState } from 'recoil/index'
import { useEffect } from 'react'
//`onClick`으로 `roomid`를 통해 => `ChatOn` 으로 진입시킴
export const ChatRoom = ({
  title,
  image,
  members,
  msg,
  time,
  unread,
  roomid
}) => {
  const navigate = useNavigate()
  const setRoomId = useSetRecoilState(roomIdState)
  const moveToChat = async () => {
    console.log(`beforeroomId:${roomid}`)
    await setRoomId(roomid)
    console.log(`afterroomId:${roomid}`)
    await navigate('/chat')
  }

  return (
    <Wrapper onClick={moveToChat}>
      <ChatRoomInfo
        title={title}
        members={members}
        msg={msg}
        image={image}
      />
      <UnreadInfo
        time={time}
        unread={unread}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  ${rowCentralise};
  position: relative;
  max-width: 430px;
`
