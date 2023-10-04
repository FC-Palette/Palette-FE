import { useState, useLayoutEffect, useEffect } from 'react'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { msgActionsState, roomIdState } from 'recoil/index'
import {
  Wrapper,
  Sender,
  Recipient,
  SubjectDetail,
  DateSeperator,
  Participation
} from 'components/index'
import { useCallback, useRef } from 'react'
import {
  renderTime,
  formatLocalDateTime,
  decoder,
  scrollToBottom
} from 'utils/index'

// ############################################################
export const ChatField = ({ messages }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const roomId = useRecoilValue(roomIdState)
  const [innerHeight, setInnerHeight] = useState<number>(0)
  let memberId = decoder().memberId

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  useEffect(() => {
    scrollToBottom(scrollRef)
  }, [messages.length])
  // 복사/공지 더블클릭 오버레이
  const [openMsgActionsIndex, setOpenMsgActionsIndex] =
    useRecoilState(msgActionsState)

  const toggleMsgActions = useCallback(
    index => {
      if (openMsgActionsIndex === index) {
        setOpenMsgActionsIndex(-1)
        return
      }
      setOpenMsgActionsIndex(index)
    },
    [openMsgActionsIndex]
  )

  const renderMessage = (message, index) => {
    const nextMessage = messages[index + 1]
    const showTimestamp = renderTime(message, nextMessage)

    //메시지 유형별 조건부 렌더링 조건들
    const msgInfo = {
      isSender:
        message.memberId === memberId &&
        (message.type === 'CHAT' || message.type === 'SHARE'),
      isRecipient:
        message.memberId !== memberId &&
        (message.type === 'CHAT' || message.type === 'SHARE'),
      isLeave: message.type === 'LEAVE',
      isJoin: message.type === 'JOIN',
      isShare: message.type === 'SHARE',
      isChat: message.type === 'CHAT'
    }

    // TimeStamp 렌더링 용도
    const prevMsgType = index > 0 ? messages[index - 1].type : null
    const prevMsgDate =
      index > 0 ? formatLocalDateTime(messages[index - 1].createdAt) : null
    const MsgDate = formatLocalDateTime(message.createdAt)
    const dateSeperator = prevMsgDate !== MsgDate

    const msgProps = {
      message: msgInfo.isChat && message.text,
      $sender: msgInfo.isSender,
      nickName: message.nickName,
      profile: message.profileImgUrl,
      createdAt: message.createdAt,
      showCreatedTime: showTimestamp,
      showMsgActions: openMsgActionsIndex === index && msgInfo.isChat,
      toggleMsgActions: () => toggleMsgActions(index),
      roomId: roomId,
      msgId: message.messageId
    }
    if (msgInfo.isShare) {
      msgProps.message = (
        <SubjectDetail
          $shared={true}
          src={message.image}
        />
      )
    }

    //채팅방 입/퇴장 상태
    const statusProps = {
      status: message.text,
      $prev: dateSeperator,
      $prevtype: prevMsgType
    }

    //채팅방 날짜 변경 조건부 렌더링
    if (dateSeperator) {
      return (
        <React.Fragment key={message.messageId}>
          <DateSeperator
            date={MsgDate}
            $isFirst={prevMsgDate}
            key={`date-${message.messageId}`}
          />
          {msgInfo.isSender && (
            <Sender
              {...msgProps}
              key={`d-sender-${message.messageId}`}
            />
          )}
          {msgInfo.isRecipient && (
            <Recipient
              {...msgProps}
              key={`d-recipient-${message.messageId}`}
            />
          )}
          {msgInfo.isLeave && (
            <Participation
              {...statusProps}
              key={`d-leave-${message.messageId}`}
            />
          )}
          {msgInfo.isJoin && (
            <Participation
              {...statusProps}
              key={`d-join-${message.messageId}`}
            />
          )}
        </React.Fragment>
      )
    }
    //채팅방 날짜변경 없을시 조건부 렌더링
    return (
      <React.Fragment key={message.messageId}>
        {msgInfo.isSender && (
          <Sender
            {...msgProps}
            key={`sender-${message.messageId}`}
          />
        )}
        {msgInfo.isRecipient && (
          <Recipient
            {...msgProps}
            key={`recipient-${message.messageId}`}
          />
        )}
        {msgInfo.isLeave && (
          <Participation
            {...statusProps}
            key={`leave-${message.messageId}`}
          />
        )}
        {msgInfo.isJoin && (
          <Participation
            {...statusProps}
            key={`join-${message.messageId}`}
          />
        )}
      </React.Fragment>
    )
  }

  return (
    <Wrapper
      $innerHeight={innerHeight}
      ref={scrollRef}>
      {messages && messages.map(renderMessage)}
    </Wrapper>
  )
}
