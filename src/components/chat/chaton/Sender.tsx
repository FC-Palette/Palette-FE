import { styled } from 'styled-components'
import { MessageTime } from 'components/index'
//ChatField
export const Sender = ({ message, $sender, createdAt, showCreatedTime }) => {
  return (
    <MessageBlock sender={$sender}>
      <SenderBlock>
        <MessageTime
          time={showCreatedTime ? createdAt : null}
          sender={$sender}
        />
        <MessageBox sender={$sender}>{message}</MessageBox>
      </SenderBlock>
    </MessageBlock>
  )
}
export const MessageBlock = styled.div<{ sender: string }>`
  padding: 10px 24px;
  word-break: break-all;
  display: flex;
  justify-content: ${props =>
    props.sender === 'sender' ? 'flex-end' : 'flex-start'};
  font-size: 14px;
`
const SenderBlock = styled.div`
  display: flex;
`
export const MessageBox = styled.div<{ sender: string }>`
  padding: 12px;
  border-radius: 12px;
  color: ${props =>
    props.sender === 'sender'
      ? props.theme.main.white
      : props.theme.main.black};
  background-color: ${props =>
    props.sender === 'sender'
      ? props.theme.main.blueChat
      : props.theme.greyScale.bluegrey};
`
