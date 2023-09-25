import { styled } from 'styled-components'
import { useResetRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useOutsideClick } from 'hooks/index'
import {
  MessageBlock,
  MessageTime,
  MessageBox,
  MemberImg,
  MsgActions
} from 'components/index'
import { columnise } from 'styles/index'
//ChatField
export const Recipient = ({
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

  return (
    <MessageBlock $sender={$sender}>
      {showCreatedTime && (
        <MemberImg
          src={'https://avatars.githubusercontent.com/u/142562921?s=200&v=4'}
        />
      )}
      {/* 하위 단축평가에 빈 공간으로 영역 차지하게 출력 */}
      {!showCreatedTime && <MemberImg src="" />}
      <RecipientBlock>
        {showCreatedTime && <MemberName>고스트 사원</MemberName>}
        <MessageBubble>
          <MessageBox
            $sender={$sender}
            onDoubleClick={toggleMsgActions}>
            {message}
            {showMsgActions && typeof message === 'string' && (
              <MsgActions
                msgRef={ref}
                $sender={$sender}
                message={message}
              />
            )}
          </MessageBox>
          <MessageTime
            time={showCreatedTime ? createdAt : null}
            $sender={$sender}
          />
        </MessageBubble>
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
const MessageBubble = styled.div`
  display: flex;
`
