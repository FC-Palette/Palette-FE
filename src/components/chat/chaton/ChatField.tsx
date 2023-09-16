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
  let previousTime = null

  return (
    <Wrapper>
      {messages.map((message, index) => {
        const isSameSender = previousSender === message.sender
        previousSender = message.sender
        const isSameTime = previousTime === message.createdAt
        previousTime = message.createdAt

        return (
          <>
            {message.sender === 'sender' && (
              <Sender
                message={message.text}
                key={index}
                sender={message.sender}
                createdAt={message.createdAt}
                //시간이 다르거나 보내는 사람이 다를 때는 시간을 보여준다. === 보내는 사람도 같고 시간도 같을때만 보여주지 않는다.
                showCreatedTime={!isSameTime || !isSameSender}
              />
            )}
            {message.sender !== 'sender' && (
              <Recipient
                message={message.text}
                isSameSender={isSameSender}
                key={index}
                sender={message.sender}
                createdAt={message.createdAt}
                showCreatedTime={!isSameTime || !isSameSender}
              />
            )}
          </>
        )
      })}
    </Wrapper>
  )
}
