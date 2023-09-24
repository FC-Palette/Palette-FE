import {
  Header,
  ChatField,
  ChatInputField,
  ChatInfo,
  ChatMembers,
  ChatStatus
} from 'components/index'
import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
import { messages } from 'constants/index'
import { useRecoilState } from 'recoil'
import { showMembersState } from 'recoil/index'
import { useNavigate } from 'react-router-dom'
import { STATUS_TEXTS } from 'constants/index'

export const ChatOn = () => {
  const navigate = useNavigate()
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)
  const handleShowMembers = () => {
    setShowMembers(!showMembers)
  }

  return (
    <>
      <ChatMembers />
      {/* HIDDEN INITIALLY */}
      <Header
        centerText="USERNAME"
        leftIcon={
          <ArrowLeft2
            onClick={() => {
              navigate('/chatlist')
            }}
            cursor="pointer"
          />
        }
        chatCount={2}>
        <StyledIcon>
          <More onClick={handleShowMembers} />
        </StyledIcon>
      </Header>
      <ChatInfo></ChatInfo>
      <ChatField messages={messages} />
      {<ChatStatus status={STATUS_TEXTS.noGroup}></ChatStatus>}
      <ChatInputField />
    </>
  )
}

export const StyledIcon = styled.button``
