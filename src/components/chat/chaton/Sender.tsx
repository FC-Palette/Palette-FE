import { styled } from 'styled-components'
import { MessageTime, MsgActions } from 'components/index'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useOutsideClick } from 'hooks/index'

//ChatField
export const Sender = ({
  message,
  $sender,
  createdAt,
  showCreatedTime,
  showMsgActions,
  toggleMsgActions
}) => {
  const reset = useResetRecoilState(msgActionsState)
  const ref = useOutsideClick({
    onClickOutside: () => {
      reset()
    }
  })
  const handleDbClick = e => {
    e.preventDefault()
    toggleMsgActions()
  }

  return (
    <MessageBlock $sender={$sender}>
      <SenderBlock>
        <MessageTime
          time={showCreatedTime ? createdAt : null}
          $sender={$sender}
        />
        <MessageBox
          $sender={$sender}
          onDoubleClick={handleDbClick}>
          {message}
          {showMsgActions && typeof message === 'string' && (
            <MsgActions
              msgRef={ref}
              $sender={$sender}
              message={message}
            />
          )}
        </MessageBox>
      </SenderBlock>
    </MessageBlock>
  )
}
export const MessageBlock = styled.div<{ $sender: string }>`
  padding: 4px 24px;
  word-break: break-all;
  display: flex;
  justify-content: ${props =>
    props.$sender === 'sender' ? 'flex-end' : 'flex-start'};
  font-size: 14px;
`
const SenderBlock = styled.div`
  display: flex;
`
export const MessageBox = styled.div<{ $sender: string }>`
  position: relative;
  user-select: none;
  padding: 12px;
  border-radius: 12px;
  color: ${props =>
    props.$sender === 'sender'
      ? props.theme.main.white
      : props.theme.main.black};
  background-color: ${props =>
    props.$sender === 'sender'
      ? props.theme.main.blueChat
      : props.theme.greyScale.bluegrey};
`
