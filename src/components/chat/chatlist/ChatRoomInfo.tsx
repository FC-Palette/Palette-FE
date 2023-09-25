import { Flexbox } from 'styles/index'
import { ChatRoomImg, ChatPreview } from 'components/index'
import { styled } from 'styled-components'
export const ChatRoomInfo = () => {
  return (
    <Wrapper>
      <ChatRoomImg src="https://avatars.githubusercontent.com/u/142562921?s=200&v=4" />
      <ChatPreview></ChatPreview>
    </Wrapper>
  )
}

const Wrapper = styled(Flexbox)`
  margin-right: 6px;
  align-items: center;
  flex-grow: 1;
  padding-left: 24px;
`
