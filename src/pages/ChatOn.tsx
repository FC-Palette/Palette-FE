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
import { CHATON_TEXTS } from 'constants/index'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  showMembersState,
  roomIdState,
  roomInfoState,
  inDetailState
} from 'recoil/index'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { decoder } from 'utils/index'
import { msgProps } from 'types/index'
import { useRecoilValue } from 'recoil'

// import * as SockJS from 'sockjs-client'
import { Client } from '@stomp/stompjs'

import { getChatLog } from 'api/index'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const [HTTP, CHATPATH, ENTER, SUB, BROKER] = [
  import.meta.env.VITE_BASE_WS_URL,
  import.meta.env.VITE_WS_CHAT_PATH,
  import.meta.env.VITE_WS_CHAT_ENTER,
  import.meta.env.VITE_WS_CHAT_SUB,
  import.meta.env.VITE_BROKER_URL
]

// const nickname = localStorage.getItem('nickname')

export const ChatOn = () => {
  const queryClient = useQueryClient()
  const memberId = decoder().memberId

  const roomId = useRecoilValue(roomIdState)
  const roomInfo = useRecoilValue(roomInfoState)
  const setInDetail = useSetRecoilState(inDetailState)
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)

  const [client, setClient] = useState<Client>()

  const [chatLog, setChatLog] = useState<msgProps[]>([])
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const navigate = useNavigate()

  const handleShowMembers = useCallback(() => {
    setShowMembers(!showMembers)
  }, [showMembers])
  const backToList = useCallback(() => {
    navigate('/chatlist/g')
    setShowMembers(false)
    setInDetail(false)
  }, [])

  const token = `${localStorage.getItem('Token')} `

  const { data: history, isLoading } = useQuery(
    ['history', roomId],
    () => {
      return getChatLog(roomId)
    },
    {
      onSuccess: data => {
        setChatLog(data.response)
        return
      }
    }
  )
  if (isLoading) {
    null
  }
  queryClient.invalidateQueries(history)
  const sendMessage = (value: string) => {
    if (value === '') {
      return
    }
    const data = {
      content: value
    }
    if (client) {
      client.publish({
        destination: CHATPATH,
        body: JSON.stringify(data),
        skipContentLengthHeader: true
      })
    }
    if (!client) {
      console.error()
    }
  }

  const errorCallback = frame => {
    console.error(frame)
  }

  const handleHistory = () => {
    setShowMembers(false)
    setInDetail(false)
  }

  // SOCKET EFFECT
  useEffect(() => {
    if (!token) {
      alert(CHATON_TEXTS.noToken)
      return backToList()
    }
    if (!roomId) {
      alert(CHATON_TEXTS.noRoomId)
      return backToList()
    }

    window.onpopstate = handleHistory

    let client = new Client({
      // webSocketFactory: () => {
      //   const sockjs = new SockJS(`${HTTP}`)
      //   return sockjs
      // },
      brokerURL: `${BROKER}`,
      onConnect: () => {
        client?.subscribe(
          `${SUB}${roomId}`,
          data => {
            const received = JSON.parse(data.body)
            setChatLog(prev => [...prev, received])
          },
          { token }
        )
        client?.publish({
          destination: ENTER,
          body: JSON.stringify({
            roomId: roomId,
            sender: memberId
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
        centerText={roomInfo.title}
        leftIcon={
          <ArrowLeft2
            onClick={backToList}
            cursor="pointer"
          />
        }
        chatCount={roomInfo.members}>
        <StyledIcon>
          <More onClick={handleShowMembers} />
        </StyledIcon>
      </Header>
      <ChatInfo />
      {/* messages => chatLog(상태) */}
      <ChatField messages={chatLog} />
      <ChatStatus />
      <ChatInputField
        inputRef={inputRef}
        client={client}
        sendMessage={sendMessage}
      />
    </>
  )
}

export const StyledIcon = styled.button``
