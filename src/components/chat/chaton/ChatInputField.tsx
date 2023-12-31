import { styled } from 'styled-components'
import { ChatInput, Background, SendFile } from 'components/index'
import { AddSquare, Send2 } from 'iconsax-react'
import { sendFileState } from 'recoil/index'
import { useRecoilState } from 'recoil'
import { Flexbox } from 'styles/index'
export const ChatInputField = ({ inputRef, sendMessage, client }) => {
  const [sendFile, setSendFile] = useRecoilState(sendFileState)
  const handleSendFile = () => {
    setSendFile(!sendFile)
  }
  const onBtnClick = e => {
    if (e.type === 'click' && client) {
      e.preventDefault()
      sendMessage(inputRef.current.value)
      inputRef.current.value = ''
      inputRef.current.style.height = 'auto'
      return
    }
  }
  return (
    <>
      {sendFile && (
        <Background onClick={handleSendFile}>
          <SendFile></SendFile>
        </Background>
      )}
      <ChatForm>
        <ChatWrapper>
          <IconWrapper $position="left">
            <AddSquare onClick={handleSendFile} />
          </IconWrapper>
          <ChatInput
            inputRef={inputRef}
            client={client}
            sendMessage={sendMessage}
          />
          <IconWrapper $position="right">
            <Send2 onClick={onBtnClick} />
          </IconWrapper>
        </ChatWrapper>
      </ChatForm>
    </>
  )
}

const ChatWrapper = styled(Flexbox)`
  position: sticky;
  top: 100%;
  background-color: ${props => props.theme.greyScale.bluegrey};
  padding: 12px 24px 20px;
  width: 100%;
  max-width: 430px;
  z-index: 100;
`

// resize로 height props받아서 align-self: center/flex-end 조절
const IconWrapper = styled.div<{ $position: string }>`
  align-self: flex-end;
  cursor: pointer;
  padding: ${props => (props.$position === 'left' ? '0 8px 0 0' : '0 0 0 8px')};
`
const ChatForm = styled.form``
