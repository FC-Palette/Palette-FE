//채팅방 하단 채팅상태 - 모임/거래종료
import { styled } from 'styled-components'
import { useQuery } from '@tanstack/react-query'
import { getNotice } from 'api/index'
import { useRecoilValue, useRecoilValueLoadable } from 'recoil'
import { chatTypeState, roomIdState } from 'recoil/index'
import { STATUS_TEXTS } from 'constants/index'

export const ChatStatus = () => {
  const roomId = useRecoilValue(roomIdState)
  const chatType = useRecoilValueLoadable(chatTypeState)

  const { data: notice } = useQuery(['notice', roomId], () => {
    return getNotice(roomId)
  })
  const deleted = notice?.response?.delete
  const typeCheck = v => {
    const types = {
      MEETING: STATUS_TEXTS.noGroup,
      SECONDHAND: STATUS_TEXTS.noTrade,
      PURCHASE: STATUS_TEXTS.noPurchase
    }
    return types[v] || ''
  }

  return <>{deleted && <StatusBar>{typeCheck(chatType)}</StatusBar>}</>
}
const StatusBar = styled.div`
  margin-top: 8px;
  font-size: 14px;
  padding: 7px 0;
  text-align: center;
  color: ${props => props.theme.main.white};
  background-color: ${props => props.theme.greyScale.grey7};
  width: 100%;
`
