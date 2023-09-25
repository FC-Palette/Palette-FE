import { ChatRoomInfo, UnreadInfo, rowCentralise } from 'components/index'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
export const ChatRoom = () => {
  const navigate = useNavigate()
  return (
    <Wrapper
      onClick={() => {
        navigate('/chat')
      }}>
      <ChatRoomInfo></ChatRoomInfo>
      <UnreadInfo></UnreadInfo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  ${rowCentralise};
  position: relative;
  max-width: 430px;
`
