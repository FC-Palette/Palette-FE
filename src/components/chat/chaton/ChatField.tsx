import React from 'react'
import { Wrapper, Sender, Recipient } from 'components/index'

export const ChatField = ({ messages }) => {
  const shouldDisplayTimestamp = (currentMessage, nextMessage) => {
    if (!nextMessage) return true // Display timestamp for the last message
    if (currentMessage.sender !== nextMessage.sender) return true // Different sender
    if (currentMessage.createdAt !== nextMessage.createdAt) return true // Different timestamp
    return false
  }

  return (
    <Wrapper>
      {messages.map((message, index) => {
        const nextMessage = messages[index + 1]
        const showTimestamp = shouldDisplayTimestamp(message, nextMessage)

        return (
          <React.Fragment key={index}>
            {message.sender === 'sender' && (
              <Sender
                message={message.text}
                $sender={message.sender}
                createdAt={message.createdAt}
                showCreatedTime={showTimestamp}
              />
            )}
            {message.sender !== 'sender' && (
              <Recipient
                message={message.text}
                // isSameSender={
                //   message.sender === (nextMessage && nextMessage.sender)
                // }
                $sender={message.sender}
                createdAt={message.createdAt}
                showCreatedTime={showTimestamp}
              />
            )}
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}
