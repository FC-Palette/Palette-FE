import { styled } from 'styled-components'
import { ChatRoom } from 'components/index'
import { useState, useEffect } from 'react'

export const ChatRooms = () => {
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  return (
    <Wrapper innerHeight={innerHeight}>
      <ChatRoom />
    </Wrapper>
  )
}

export const Wrapper = styled.div<{ innerHeight?: number }>`
  min-width: 375px;
  height: ${props => props.innerHeight}px;
  overflow: scroll;
`
