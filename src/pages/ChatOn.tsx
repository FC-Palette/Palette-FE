import {
  Header,
  BackgroundModal,
  ChatField,
  ModalButtons
} from 'components/index'
import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
export const ChatOn = () => {
  return (
    <>
      <BackgroundModal
        title="asd"
        content="asd"></BackgroundModal>
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
