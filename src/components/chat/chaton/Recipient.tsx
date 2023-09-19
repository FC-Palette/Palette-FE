import { styled } from 'styled-components'
import {
  MessageBlock,
  MessageTime,
  MessageBox,
  MemberImg
} from 'components/index'
//ChatField
export const Recipient = ({ message, $sender, createdAt, showCreatedTime }) => {
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
          <MessageBox $sender={$sender}>{message}</MessageBox>
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
  display: flex;
  flex-direction: column;
`
const MemberName = styled.span`
  color: ${props => props.theme.greyScale.grey7};
  font-size: 12px;
  line-height: 18px;
`
const MessageBubble = styled.div`
  display: flex;
`
