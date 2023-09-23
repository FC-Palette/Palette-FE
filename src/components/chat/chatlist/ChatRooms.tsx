import { styled } from 'styled-components'
import { ChatRoom } from 'components/index'
import { useState, useLayoutEffect } from 'react'

export const ChatRooms = () => {
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  return (
    <Wrapper $innerHeight={innerHeight}>
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
      <ChatRoom />
    </Wrapper>
  )
}

export const Wrapper = styled.div<{ $innerHeight?: number }>`
  min-width: 375px;
  height: ${props => props.$innerHeight}px;
  overflow: scroll;
`
