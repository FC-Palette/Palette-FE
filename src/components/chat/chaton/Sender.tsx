import { styled } from 'styled-components'
import { MessageTime, MsgActions } from 'components/index'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useOutsideClick } from 'hooks/index'
import { Flexbox } from 'styles/index'

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
      <Flexbox>
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
      </Flexbox>
    </MessageBlock>
  )
}
export const MessageBlock = styled(Flexbox)<{ $sender: string }>`
  padding: 4px 24px;
  word-break: break-all;
  justify-content: ${props =>
    props.$sender === 'sender' ? 'flex-end' : 'flex-start'};
  font-size: 14px;
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
