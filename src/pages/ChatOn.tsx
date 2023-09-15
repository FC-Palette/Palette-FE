import {
  Header,
  BackgroundModal,
  ChatField,
  ModalButtons
} from 'components/index'
import { styled } from 'styled-components'
import { CHATON_TEXTS } from 'constants/index'
import { ArrowLeft2, More } from 'iconsax-react'
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
      <ChatField />
    </>
  )
}

export const StyledIcon = styled.button``
