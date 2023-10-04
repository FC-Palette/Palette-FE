import {
  Header,
  ChatField,
  ChatInputField,
  ChatInfo,
  ChatMembers,
  ChatStatus
} from 'components/index'
import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
import { STATUS_TEXTS, CHATON_TEXTS } from 'constants/index'
import { useRecoilState } from 'recoil'
import { showMembersState, roomIdState } from 'recoil/index'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { decoder } from 'utils/index'
import { msgProps } from 'types/index'
import { useSetRecoilState } from 'recoil'

import * as SockJS from 'sockjs-client'
import * as Stomp from '@stomp/stompjs'

import { getChatLog } from 'api/index'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const [HTTP, CHATPATH, ENTER, SUB] = [
  import.meta.env.VITE_BASE_WS_URL,
  import.meta.env.VITE_WS_CHAT_PATH,
  import.meta.env.VITE_WS_CHAT_ENTER,
  import.meta.env.VITE_WS_CHAT_SUB
]

// const nickname = localStorage.getItem('nickname')

export const ChatOn = () => {
  const location = useLocation()
  const queryClient = useQueryClient()
  let roomId = location.state.roomid
  let memberId = decoder().memberId
  const setRoomId = useSetRecoilState(roomIdState)

  const [client, setClient] = useState<Stomp.Client>()

  const [chatLog, setChatLog] = useState<msgProps[]>([])
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const navigate = useNavigate()
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)

  const handleShowMembers = useCallback(() => {
    setShowMembers(!showMembers)
  }, [showMembers])
  const backToList = useCallback(() => {
    navigate('/chatlist/g')
  }, [])

  const token = `${localStorage.getItem('Token')} `

  const {
    data: history
    // isLoading,
    // isError
  } = useQuery(['history', roomId], () => {
    return getChatLog(roomId)
  })
  queryClient.invalidateQueries(history)
  console.log(history)
  const sendMessage = (value: string) => {
    const data = {
      // memberId: memberId,
      // sender: nickname,
      content: value
      // type: 'CHAT',
      // roomId: roomId
    }
    if (client) {
      client.publish({
        destination: CHATPATH,
        headers: { token },
        body: JSON.stringify(data)
      })
      console.log(chatLog)
    }
    if (!client) {
      console.error()
    }
  }

  const errorCallback = frame => {
    console.error(frame)
  }

  // 1. useEffect로 채팅방 메시지 리스트(DB 내부)를 받아와 상태값(state)에 저장
  useEffect(() => {
    setRoomId(roomId)
    if (!token) {
      alert(CHATON_TEXTS.noToken)
      return backToList()
    }
    if (!roomId) {
      alert(CHATON_TEXTS.noRoomId)
      return backToList()
    }
    if (history) {
      setChatLog(history)
      console.log(history)
    }
    let client = new Stomp.Client({
      webSocketFactory: () => {
        const sockjs = new SockJS(`${HTTP}`)
        return sockjs
      },
      onConnect: () => {
        client?.subscribe(
          `${SUB}${roomId}`,
          data => {
            const received = JSON.parse(data.body)
            console.log(received)
            setChatLog(prev => [...prev, received])
          },
          { token }
        )
        client?.publish({
          destination: ENTER,
          body: JSON.stringify({
            roomId: roomId,
            memberId: memberId
          })
        })
      },
      debug: str => {
        console.log(str)
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onStompError: errorCallback,
      onWebSocketError: errorCallback,
      logRawCommunication: true
    })
    client.activate()
    setClient(client)
    return () => {
      client.deactivate()
    }
  }, [])
  return (
    <>
      <ChatMembers />
      <Header
        centerText="USERNAME"
        leftIcon={
          <ArrowLeft2
            onClick={backToList}
            cursor="pointer"
          />
        }
        chatCount={2}>
        <StyledIcon>
          <More onClick={handleShowMembers} />
        </StyledIcon>
      </Header>
      <ChatInfo />
      {/* messages => chatLog(상태) */}
      <ChatField messages={chatLog} />
      {<ChatStatus status={STATUS_TEXTS.noGroup}></ChatStatus>}
      <ChatInputField
        inputRef={inputRef}
        client={client}
        sendMessage={sendMessage}
      />
    </>
  )
}

export const StyledIcon = styled.button``
