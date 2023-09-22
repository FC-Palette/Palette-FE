import {
  Header,
  ChatField,
  ChatInputField,
  ChatInfo,
  ChatMembers
} from 'components/index'
import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
import { messages } from 'constants/index'
import { useRecoilState } from 'recoil'
import { showMembersState } from 'recoil/index'
import { useNavigate } from 'react-router-dom'

export const ChatOn = () => {
  const navigate = useNavigate()
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)
  const handleShowMembers = () => {
    setShowMembers(!showMembers)
  }

  return (
    <>
      <ChatMembers />
      <Header
        centerText="USERNAME"
        leftIcon={
          <ArrowLeft2
            onClick={() => {
              navigate('/chatlist')
            }}
            cursor="pointer"
          />
        }>
        <StyledIcon onClick={handleShowMembers}>
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
