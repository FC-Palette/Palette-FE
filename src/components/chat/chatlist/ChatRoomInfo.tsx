import { ChatRoomImg, ChatPreview } from 'components/index'
import { styled } from 'styled-components'
export const ChatRoomInfo = () => {
  return (
    <Wrapper>
      <ChatRoomImg></ChatRoomImg>
      <ChatPreview></ChatPreview>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 6px;
  align-items: center;
  padding-left: 24px;
`
