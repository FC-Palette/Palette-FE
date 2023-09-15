import { ChatRoomInfo, UnreadInfo } from 'components/index'
import { styled } from 'styled-components'

export const ChatRoom = () => {
  return (
    <Wrapper>
      <ChatRoomInfo></ChatRoomInfo>
      <UnreadInfo></UnreadInfo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 430px;
`
