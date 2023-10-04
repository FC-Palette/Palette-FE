import { ChatRoomInfo, UnreadInfo } from 'components/index'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { rowCentralise } from 'styles/index'
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
  const moveToChat = () => {
    navigate('/chat', {
      state: { roomid }
    })
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
