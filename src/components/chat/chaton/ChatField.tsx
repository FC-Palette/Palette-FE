import React from 'react'
import { useRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useState, useLayoutEffect } from 'react'
import {
  Wrapper,
  Sender,
  Recipient,
  SubjectDetail,
  DateSeperator
} from 'components/index'

export const ChatField = ({ messages }) => {
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
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

  // let prevMsgDate = null

  const renderMessage = (message, index) => {
    const nextMessage = messages[index + 1]
    const showTimestamp = shouldDisplayTimestamp(message, nextMessage)
    const isSender = message.sender === 'sender'
    const prevMsgDate =
      index > 0 ? messages[index - 1].createdAt.split(' ')[0] : null
    const MsgDate = message.createdAt.split(' ')[0]
    // 이전 메시지의 날짜와 이후 메시지의 날짜를 비교해 같지 않다면(0826,0827)
    // 이후 메시지의 날짜를 이용해 구분한다.
    const dateSeperator = prevMsgDate !== MsgDate

    if (dateSeperator) {
      return (
        <React.Fragment key={index}>
          <DateSeperator
            date={MsgDate}
            $isFirst={prevMsgDate}
          />
          {isSender ? (
            <Sender
              message={
                message.type === 'text' ? (
                  message.text
                ) : (
                  <SubjectDetail $shared={true} />
                )
              }
              $sender={message.sender}
              createdAt={message.createdAt}
              showCreatedTime={showTimestamp}
              showMsgActions={openMsgActionsIndex === index}
              toggleMsgActions={() => toggleMsgActions(index)}
            />
          ) : (
            <Recipient
              message={
                message.type === 'text' ? (
                  message.text
                ) : (
                  <SubjectDetail $shared={true} />
                )
              }
              $sender={message.sender}
              createdAt={message.createdAt}
              showCreatedTime={showTimestamp}
              showMsgActions={openMsgActionsIndex === index}
              toggleMsgActions={() => toggleMsgActions(index)}
            />
          )}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment key={index}>
        {isSender ? (
          <Sender
            message={
              message.type === 'text' ? (
                message.text
              ) : (
                <SubjectDetail $shared={true} />
              )
            }
            $sender={message.sender}
            createdAt={message.createdAt}
            showCreatedTime={showTimestamp}
            showMsgActions={openMsgActionsIndex === index}
            toggleMsgActions={() => toggleMsgActions(index)}
          />
        ) : (
          <Recipient
            message={
              message.type === 'text' ? (
                message.text
              ) : (
                <SubjectDetail $shared={true} />
              )
            }
            $sender={message.sender}
            createdAt={message.createdAt}
            showCreatedTime={showTimestamp}
            showMsgActions={openMsgActionsIndex === index}
            toggleMsgActions={() => toggleMsgActions(index)}
          />
        )}
      </React.Fragment>
    )
  }

  return (
    <Wrapper $innerHeight={innerHeight}>{messages.map(renderMessage)}</Wrapper>
  )
}
