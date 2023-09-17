import { styled } from 'styled-components'
import { ChatInput } from 'components/index'
import { AddSquare, Send2 } from 'iconsax-react'

export const ChatInputField = () => {
  return (
    <ChatWrapper>
      <IconWrapper position="left">
        <AddSquare />
      </IconWrapper>
      <ChatInput />
      <IconWrapper position="right">
        <Send2 />
      </IconWrapper>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${props => props.theme.greyScale.bluegrey};
  padding: 12px 24px 20px;
  display: flex;
  width: 100%;
  max-width: 430px;
  z-index: 100;
`
const IconWrapper = styled.div<{ position: string }>`
  align-self: center;
  padding: ${props => (props.position === 'left' ? '0 8px 0 0' : '0 0 0 8px')};
`
