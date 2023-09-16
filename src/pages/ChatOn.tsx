import {
  Header,
  BackgroundModal,
  ChatField,
  ModalButtons
} from 'components/index'
import { styled } from 'styled-components'
import { CHATON_TEXTS } from 'constants/index'
import { ArrowLeft2, More } from 'iconsax-react'

//지우자
const messages = [
  {
    sender: 'sender',
    text: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
  },
  { sender: 'sender', text: '안녕하세요' },
  { sender: 'sender', text: '안녕하세요' },
  { sender: 'sender', text: '안녕하세요' },
  {
    sender: 'recipient',
    text: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
  },
  { sender: 'recipient', text: '안녕하세요' },
  { sender: 'sender', text: '안녕하세요' },
  { sender: 'recipient', text: '안녕하세요' },
  { sender: 'sender', text: '안녕하세요' }
]

export const ChatOn = () => {
  return (
    <>
      <BackgroundModal
        title={CHATON_TEXTS.chatRoomExit}
        content={CHATON_TEXTS.memberWarn}>
        <ModalButtons
          leftBtn={CHATON_TEXTS.cancel}
          rightBtn={CHATON_TEXTS.exit}
        />
      </BackgroundModal>
      <Header
        centerText="USERNAME"
        leftIcon={<ArrowLeft2 />}>
        <StyledIcon>
          <More />
        </StyledIcon>
      </Header>
      <ChatField messages={messages} />
    </>
  )
}

export const StyledIcon = styled.button``
