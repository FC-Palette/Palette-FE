import { styled } from 'styled-components'
import { Wrapper, Modal, Sender, Recipient } from 'components/index'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'

export const ChatField = ({ messages }) => {
  // const [modalOn, setModalOn] = useRecoilState(modalOnState)
  // const handleModalOn = () => {
  //   setModalOn(!modalOn)
  //   console.log(modalOn)
  // }

  let previousSender = null

  return (
    <Wrapper>
      {messages.map((message, index) => {
        const isSameSender = previousSender === message.sender
        previousSender = message.sender

        return (
          <>
            {message.sender === 'sender' && (
              <Sender
                message={message.text}
                key={index}
                sender={message.sender}
              />
            )}
            {message.sender !== 'sender' && (
              <Recipient
                message={message.text}
                showProfileImage={!isSameSender}
                key={index}
                sender={message.sender}
              />
            )}
          </>
        )
      })}
    </Wrapper>
  )
}
