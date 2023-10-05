//채팅방 상단 공지(토글X)
import { styled } from 'styled-components'
import { Flexbox } from 'styles/index'
import { MegaPhoneIcon } from 'components/index'
// import { getNotice } from 'api/index'
// import { useQuery } from '@tanstack/react-query'

// $registered 대신 getNotice를 통해 받아온 채팅방공지를 상태에 저장, 조건부 렌더링
export const ChatAnn = ({ $registered, $personal, onClick }) => {
  return (
    <>
      {$registered && (
        <ChatTopBar
          $registered={$registered}
          $personal={$personal}
          onClick={onClick}>
          <MegaPhoneIcon $iconColor="blue0" />
          <TopBarContent>{$registered}</TopBarContent>
        </ChatTopBar>
      )}
    </>
  )
}

export const ChatTopBar = styled(Flexbox)<{
  $registered?: string
  $personal?: boolean
}>`
  padding: 12px 24px;
  background-color: ${props => props.theme.greyScale.bluegrey};
  color: ${props => props.theme.main.blue0};
  border-top: ${props =>
    props.$registered && props.$personal === false
      ? `1px solid ${props.theme.greyScale.grey3}`
      : 'none'};
  cursor: pointer;
`
export const TopBarContent = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  padding-left: 8px;
  align-self: center;
  color: ${props => props.theme.main.black};
`
