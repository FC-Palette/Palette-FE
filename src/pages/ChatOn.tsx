import {
  Header,
  BackgroundModal,
  ChatField,
  ModalButtons,
  ChatInputField,
  ChatInfo
} from 'components/index'
import { styled } from 'styled-components'
import { CHATON_TEXTS } from 'constants/index'
import { ArrowLeft2, More } from 'iconsax-react'

//지우자
const messages = [
  {
    sender: 'sender',
    text: '보내는사람이매우긴메시지를보내는경우입니다띄어쓰기없이몇글자인지확인하실수있게안띄우고씁니다.근데이거길이제한은있어야할것같은데...',
    createdAt: '오후 10:23'
  },
  { sender: 'sender', text: '안녕하세요', createdAt: '오후 10:28' },
  {
    sender: 'sender',
    text: '10:28 같은 시간에 한번 더 안녕하세요. 시간이 보이지 않습니다. 근데 이러면 이렇게 너비를 풀로 차지하는 게 맞나......?',
    createdAt: '오후 10:28'
  },
  { sender: 'sender', text: '안녕하세요', createdAt: '오후 10:49' },
  {
    sender: 'recipient',
    text: '다른사람이매우긴메시지를보내는경우입니다띄어쓰기없이몇글자인지확인하실수있게안띄우고씁니다.',
    createdAt: '오후 11:13'
  },
  {
    sender: 'recipient',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 오후 11:23 같은 시간이 보이지 않습니다.',
    createdAt: '오후 11:23'
  },
  {
    sender: 'recipient',
    text: '다른 사람이 메세지를 연속적으로 보냈을 때 프로필사진이 보이지 않습니다.',
    createdAt: '오후 11:23'
  },
  { sender: 'sender', text: '아 시간 조건 까다롭네', createdAt: '오후 11:25' },
  {
    sender: 'recipient',
    text: '오후 11:47에 다른 사람이 안녕하세요',
    createdAt: '오후 11:47'
  },
  {
    sender: 'sender',
    text: '오후 11:47에 내가 같은 시간에 한번 더 안녕하세요를 입력할 때는 다른 사람이 보냈으므로 시간이 나타납니다.',
    createdAt: '오후 11:47'
  }
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
      <ChatInfo></ChatInfo>
      <ChatField messages={messages} />
      <ChatInputField />
    </>
  )
}

export const StyledIcon = styled.button``
