import React from 'react'
import { useState } from 'react'
import { Wrapper, Sender, Recipient } from 'components/index'

export const ChatField = ({ messages }) => {
  //시간 로직 => 유틸 분리 가능?
  const shouldDisplayTimestamp = (currentMessage, nextMessage) => {
    if (!nextMessage) return true // Display timestamp for the last message
    if (currentMessage.sender !== nextMessage.sender) return true // Different sender
    if (currentMessage.createdAt !== nextMessage.createdAt) return true // Different timestamp
    return false
  }

  const [openMsgActionsIndex, setOpenMsgActionsIndex] = useState(-1)

  const toggleMsgActions = index => {
    if (openMsgActionsIndex === index) {
      setOpenMsgActionsIndex(-1)
      return
    }
    setOpenMsgActionsIndex(index)
  }

  return (
    <Wrapper>
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
