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
import { messages, STATUS_TEXTS, CHATON_TEXTS } from 'constants/index'

import { useRecoilState } from 'recoil'
import { showMembersState } from 'recoil/index'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback, useEffect, useRef, useState } from 'react'
import { decoder } from 'utils/index'
import { msgProps } from 'types/index'

import * as SockJS from 'sockjs-client'
import * as Stomp from '@stomp/stompjs'

// import { getChatLog } from 'api/index'

const [HTTP, CHATPATH, ENTER, SUB] = [
  import.meta.env.VITE_BASE_URL,
  import.meta.env.VITE_WS_CHAT_PATH,
  import.meta.env.VITE_WS_CHAT_ENTER,
  import.meta.env.VITE_WS_CHAT_SUB
]

//####################################################################
// chatrooms에서 roomid props로 받아와서 enter에 전송
// 1. useEffect로 채팅방 메시지 리스트(DB 내부)를 받아와 상태값(state)에 저장
// 2. 저장된 상태값의 setter함수를 stomp의 subscribe에도 추가, 서버로부터 수신되는 메시지를 함께 추가

// 채팅 리스트에서는 확실히 roomId가 들어옴/ 사요, 성장해요, 개인채팅에서는 useLocation 사용
export const ChatOn = props => {
  const location = useLocation()

  let roomId = props ? props.key : location.state.roomId
  let memberId = decoder().memberId

  const clientRef = useRef<Stomp.Client | null>(null)
  let client = clientRef.current

  // getChatLog를 통해 받아온 메시지 내역
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

  const token = `Authorization : ${localStorage.getItem('token')} `

  const onEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage(e.target.value)
      resetInput()
      return
    }
    // 아이콘 전송
    if (e.type === 'click') {
      e.preventDefault()
      sendMessage(e.target.value)
      resetInput()
      return
    }
  }

  // STOMP 전송 후 인풋 초기화(uncontrolled)
  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.style.height = 'auto'
    }
  }

  // SEND : [경로, 헤더({}), 바디(내용, **JSON.stringify**)]
  const sendMessage = (value: string) => {
    // private ChatMessageType type;
    // private String content;
    // private String image;
    // private Long sender;
    // private String roomId;
    const data = {
      // sender: username,
      content: value,
      type: 'CHAT',
      roomId: roomId
    }
    if (client) {
      client.publish({
        destination: CHATPATH,
        headers: { token },
        body: JSON.stringify(data)
      })
    }
    if (!client) {
      console.log(value)
    }
  }

  const errorCallback = frame => {
    console.error(frame)
  }

  const StompSubscribe = useCallback(() => {
    ;() => {
      client?.subscribe(
        `${SUB}${roomId}`,
        data => {
          const received = JSON.parse(data.body)
          console.log(received)
          // onMsgReceived
          // 수신된 메시지를 초기 DB에서 조회해온 상태값(메시지 리스트)에 추가 - 로직 추가
          setChatLog(prev => [...prev, received])
        },
        { token }
      )
    }
  }, [setChatLog])
  const StompEnter = useCallback(() => {
    ;() => {
      client?.publish({
        destination: ENTER,
        body: JSON.stringify({
          roomId: roomId,
          memberId: memberId
        })
      })
    }
  }, [])

  // 1. useEffect로 채팅방 메시지 리스트(DB 내부)를 받아와 상태값(state)에 저장
  useEffect(() => {
    console.log(chatLog)
    if (!token) {
      alert(CHATON_TEXTS.noToken)
      backToList()
      return
    }
    //   if (!roomId) {
    //     alert(CHATON_TEXTS.noRoomId)
    //     backToList()
    //     return
    //   }
    //   const fetchChatLog = async () => {
    //     const res = await getChatLog('11')
    //     setChatLog(res)
    //     console.log(res)
    //   }
    //   fetchChatLog()
    client = new Stomp.Client({
      webSocketFactory: () => new SockJS(`${HTTP}`),
      debug: str => {
        console.log(str)
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        if (client) {
          StompSubscribe()
          StompEnter()
        }
      },
      onStompError: errorCallback,
      onWebSocketError: errorCallback
    })
    client.activate()

    return () => {
      if (client) {
        client.deactivate()
      }
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
      <ChatInfo></ChatInfo>
      {/* messages => chatLog(상태) */}
      <ChatField messages={messages} />
      {<ChatStatus status={STATUS_TEXTS.noGroup}></ChatStatus>}
      <ChatInputField
        inputRef={inputRef}
        onEnterPress={onEnterPress}
      />
    </>
  )
}

export const StyledIcon = styled.button``

/*
{
	"status": 200, 
	"success": true,
	"response": [
		{
			"memberId" : 1,
			"profileImgUrl" : "https://",
			"nickName" : "고스트 사원"
			"text" : "안녕하세요",
	    "image?" : "https://", //type===IMAGE
	    "createdAt" : 23.09.18
	    "type" : "CHAT, IMAGE, FILE, LEAVE, JOIN, SHARE"
		},
		...
	] 
}
*/
