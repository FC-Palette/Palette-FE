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
import { useCallback } from 'react'

//메시지 생성시간을 보여주는 조건
const renderTime = (curMsg, nextMsg) => {
  if (!nextMsg) return true //다음 메시지가 없을 경우
  if (curMsg.sender !== nextMsg.sender) return true // 다음 메시지가 내 메시지가 아닌 경우
  if (curMsg.createdAt !== nextMsg.createdAt) return true // 현재 메시지와 다음 메시지의 시간이 다른 경우
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

  const toggleMsgActions = useCallback(index => {
    if (openMsgActionsIndex === index) {
      setOpenMsgActionsIndex(-1)
      return
    }
    setOpenMsgActionsIndex(index)
  }, [openMsgActionsIndex])

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
