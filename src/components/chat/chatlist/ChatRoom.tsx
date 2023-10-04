import { ChatRoomInfo, UnreadInfo } from 'components/index'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { rowCentralise } from 'styles/index'
import { useSetRecoilState } from 'recoil'
import { roomIdState, roomInfoState } from 'recoil/index'

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
  const setRoomInfo = useSetRecoilState(roomInfoState)
  const moveToChat = () => {
    setRoomId(roomid)
    setRoomInfo({ title: title, members: members })
    navigate('/chat')
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
