import { Flexbox } from 'styles/index'
import { ChatRoomImg, ChatPreview } from 'components/index'
import { styled } from 'styled-components'

export const ChatRoomInfo = ({ image, title, members, msg }) => {
  return (
    <Wrapper>
      <ChatRoomImg src={image} />
      <ChatPreview
        title={title}
        members={members}
        msg={msg}></ChatPreview>
    </Wrapper>
  )
}

const Wrapper = styled(Flexbox)`
  margin-right: 6px;
  align-items: center;
  flex-grow: 1;
  padding-left: 24px;
`
