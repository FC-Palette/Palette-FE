import React from 'react'
import { useRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useState, useLayoutEffect } from 'react'
import {
  Wrapper,
  Sender,
  Recipient,
  SubjectDetail,
  DateSeperator,
  Participation
} from 'components/index'

const renderTime = (currentMessage, nextMessage) => {
  if (!nextMessage) return true // Display timestamp for the last message
  if (currentMessage.sender !== nextMessage.sender) return true // Different sender
  if (currentMessage.createdAt !== nextMessage.createdAt) return true // Different timestamp
  return false
}

export const ChatField = ({ messages }) => {
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  const [openMsgActionsIndex, setOpenMsgActionsIndex] =
    useRecoilState(msgActionsState)

  const toggleMsgActions = index => {
    if (openMsgActionsIndex === index) {
      setOpenMsgActionsIndex(-1)
      return
    }
    setOpenMsgActionsIndex(index)
  }

  const renderMessage = (message, index) => {
    const nextMessage = messages[index + 1]
    const showTimestamp = renderTime(message, nextMessage)

    const isSender = message.sender === 'sender'
    const isRecipient = message.sender === 'recipient'
    const isExit = message.type === 'exit'
    const isJoin = message.type === 'join'

    const prevMsgType = index > 0 ? messages[index - 1].type : null
    const prevMsgDate =
      index > 0 ? messages[index - 1].createdAt.split(' ')[0] : null
    const MsgDate = message.createdAt.split(' ')[0]
    const dateSeperator = prevMsgDate !== MsgDate

    const msgProps = {
      message:
        message.type === 'text' ? (
          message.text
        ) : (
          <SubjectDetail $shared={true} />
        ),
      $sender: message.sender,
      createdAt: message.createdAt,
      showCreatedTime: showTimestamp,
      showMsgActions: openMsgActionsIndex === index,
      toggleMsgActions: () => toggleMsgActions(index)
    }
    const statusProps = {
      status: message.text,
      $prev: dateSeperator,
      $prevtype: prevMsgType
    }

    if (dateSeperator) {
      return (
        <React.Fragment key={index}>
          <DateSeperator
            date={MsgDate}
            $isFirst={prevMsgDate}
          />
          {isSender && <Sender {...msgProps} />}
          {isRecipient && <Recipient {...msgProps} />}
          {isExit && <Participation {...statusProps} />}
          {isJoin && <Participation {...statusProps} />}
        </React.Fragment>
      )
    }

    return (
      <React.Fragment key={index}>
        {isSender && <Sender {...msgProps} />}
        {isRecipient && <Recipient {...msgProps} />}
        {isExit && <Participation {...statusProps} />}
        {isJoin && <Participation {...statusProps} />}
      </React.Fragment>
    )
  }

  return (
    <Wrapper $innerHeight={innerHeight}>{messages.map(renderMessage)}</Wrapper>
  )
}
