import React from 'react'
import { useRecoilState } from 'recoil'
import { msgActionsState } from 'recoil/index'
import { useState, useLayoutEffect, useMemo } from 'react'
import {
  Wrapper,
  Sender,
  Recipient,
  SubjectDetail,
  DateSeperator,
  Participation
} from 'components/index'
import { useCallback } from 'react'
import { renderTime, formatLocalDateTime } from 'utils/index'

// ############################################################
export const ChatField = ({ messages }) => {
  // let memberId = decoder().memberId
  let memberId = 1

  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

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
    const msgInfo = useMemo(() => {
      return {
        isSender: message.memberId === memberId,
        isRecipient:
          message.memberId !== memberId &&
          (message.type === 'CHAT' || message.type === 'SHARE'),
        isLeave: message.type === 'LEAVE',
        isJoin: message.type === 'JOIN',
        isShare: message.type === 'SHARE',
        isChat: message.type === 'CHAT'
      }
    }, [message, memberId])

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
      toggleMsgActions: () => toggleMsgActions(index)
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
        <React.Fragment key={index}>
          <DateSeperator
            date={MsgDate}
            $isFirst={prevMsgDate}
          />
          {msgInfo.isSender && <Sender {...msgProps} />}
          {msgInfo.isRecipient && <Recipient {...msgProps} />}
          {msgInfo.isLeave && <Participation {...statusProps} />}
          {msgInfo.isJoin && <Participation {...statusProps} />}
        </React.Fragment>
      )
    }

    //채팅방 날짜변경 없을시 조건부 렌더링
    return (
      <React.Fragment key={index}>
        {msgInfo.isSender && <Sender {...msgProps} />}
        {msgInfo.isRecipient && <Recipient {...msgProps} />}
        {msgInfo.isLeave && <Participation {...statusProps} />}
        {msgInfo.isJoin && <Participation {...statusProps} />}
      </React.Fragment>
    )
  }

  return (
    <Wrapper $innerHeight={innerHeight}>{messages.map(renderMessage)}</Wrapper>
  )
}
