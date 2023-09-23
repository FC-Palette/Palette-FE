//채팅방 하단 채팅상태 - 모임/거래종료
import { styled } from 'styled-components'
export const ChatStatus = ({ status }) => {
  return <StatusBar>{status}</StatusBar>
}
const StatusBar = styled.div`
  padding: 7px 0;
  text-align: center;
  color: ${props => props.theme.main.white};
  background-color: ${props => props.theme.greyScale.grey7};
  width: 100%;
`
