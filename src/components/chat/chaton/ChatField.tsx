import React from 'react'
import { useRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useState, useEffect } from 'react'
import { Wrapper, Sender, Recipient } from 'components/index'

export const ChatField = ({ messages }) => {
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  //시간 로직 => 유틸 분리 가능?
  const shouldDisplayTimestamp = (currentMessage, nextMessage) => {
    if (!nextMessage) return true // Display timestamp for the last message
    if (currentMessage.sender !== nextMessage.sender) return true // Different sender
    if (currentMessage.createdAt !== nextMessage.createdAt) return true // Different timestamp
    return false
  }

  //atoms로 처리 후 Recipient && Sender에 존재하는 msgLayer 삭제
  //useOutsideClick으로 setOpenMsgActionsIndex(-1)로 초기화
  const [openMsgActionsIndex, setOpenMsgActionsIndex] =
    useRecoilState(msgActionsState)

  const toggleMsgActions = index => {
    if (openMsgActionsIndex === index) {
      setOpenMsgActionsIndex(-1)
      return
    }
    setOpenMsgActionsIndex(index)
  }

  return (
    <Wrapper $innerHeight={innerHeight}>
      {messages.map((message, index) => {
        //시간 로직
        const nextMessage = messages[index + 1]
        const showTimestamp = shouldDisplayTimestamp(message, nextMessage)

        //복사/공지 오버레이 로직
        const showMsgActions = openMsgActionsIndex === index

        return (
          <React.Fragment key={index}>
            {message.sender === 'sender' && (
              <Sender
                message={message.text}
                $sender={message.sender}
                createdAt={message.createdAt}
                showCreatedTime={showTimestamp}
                showMsgActions={showMsgActions}
                toggleMsgActions={() => toggleMsgActions(index)}
              />
            )}
            {message.sender !== 'sender' && (
              <Recipient
                message={message.text}
                $sender={message.sender}
                createdAt={message.createdAt}
                showCreatedTime={showTimestamp}
                showMsgActions={showMsgActions}
                toggleMsgActions={() => toggleMsgActions(index)}
              />
            )}
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}
