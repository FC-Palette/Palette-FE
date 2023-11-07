import { memo } from 'react'
import { styled } from 'styled-components'
import { MessageTime, MsgActions } from 'components/index'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useOutsideClick } from 'hooks/index'
import { Flexbox } from 'styles/index'
import { formatHourMinute } from 'utils/index'
import { SenderProps } from 'types/index'

//ChatField
export const Sender = memo(
  ({
    message,
    $sender,
    createdAt,
    showCreatedTime,
    showMsgActions,
    toggleMsgActions,
    roomId,
    msgId
  }: SenderProps) => {
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

    //메시지가 수신되지 않은 상태에서 컴포넌트를 렌더링시키며 깜빡거릴 가능성
    return (
      <MessageBlock $sender={$sender}>
        <Flexbox>
          <MessageTime
            time={showCreatedTime ? formatHourMinute(createdAt) : null}
            $sender={$sender}
          />
          <MessageBox
            $sender={$sender}
            onDoubleClick={handleDbClick}>
            {message}
            {showMsgActions && (
              <MsgActions
                msgRef={ref}
                $sender={$sender}
                message={message}
                roomId={roomId}
                msgId={msgId}
              />
            )}
          </MessageBox>
        </Flexbox>
      </MessageBlock>
    )
  }
)
export const MessageBlock = styled(Flexbox)<{ $sender: boolean }>`
  padding: 4px 24px;
  word-break: break-all;
  justify-content: ${props => (props.$sender ? 'flex-end' : 'flex-start')};
  font-size: 14px;
`
export const MessageBox = styled.div<{ $sender: boolean }>`
  position: relative;
  user-select: none;
  padding: 12px;
  border-radius: 12px;
  color: ${props =>
    props.$sender ? props.theme.main.white : props.theme.main.black};
  background-color: ${props =>
    props.$sender ? props.theme.main.blueChat : props.theme.greyScale.bluegrey};
`
