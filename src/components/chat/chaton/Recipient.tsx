import { styled } from 'styled-components'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useOutsideClick } from 'hooks/index'
import { formatHourMinute } from 'utils/index'

import {
  MessageBlock,
  MessageTime,
  MessageBox,
  MemberImg,
  MsgActions
} from 'components/index'
import { Flexbox, columnise } from 'styles/index'

//ChatField
export const Recipient = ({
  message,
  $sender,
  nickName,
  createdAt,
  profile,
  showCreatedTime,
  showMsgActions,
  toggleMsgActions,
  roomId,
  msgId
}) => {
  const reset = useResetRecoilState(msgActionsState)
  const ref = useOutsideClick({
    onClickOutside: () => {
      reset()
    }
  })

  return (
    <MessageBlock $sender={$sender}>
      {showCreatedTime && <MemberImg src={profile} />}
      {!showCreatedTime && <MemberImg src="" />}
      <RecipientBlock>
        {showCreatedTime && <MemberName>{nickName}</MemberName>}
        <Flexbox>
          <MessageBox
            $sender={$sender}
            onDoubleClick={toggleMsgActions}>
            {message}
            {showMsgActions && typeof message === 'string' && (
              <MsgActions
                msgRef={ref}
                $sender={$sender}
                message={message}
                roomId={roomId}
                msgId={msgId}
              />
            )}
          </MessageBox>
          <MessageTime
            time={showCreatedTime ? formatHourMinute(createdAt) : null}
            $sender={$sender}
          />
        </Flexbox>
      </RecipientBlock>
    </MessageBlock>
  )
}

const RecipientBlock = styled.div`
  ${columnise};
`
const MemberName = styled.span`
  color: ${props => props.theme.greyScale.grey7};
  font-size: 12px;
  line-height: 18px;
`
