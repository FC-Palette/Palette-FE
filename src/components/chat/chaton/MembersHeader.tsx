import { styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
import { ToChatList } from 'components/index'
import { Flexbox } from 'styles/index'
import { CHAT_TEXTS } from 'constants/index'
import { getMembers } from 'api/index'
import { useQuery } from '@tanstack/react-query'

export const MembersHeader = ({ onClick, roomid }) => {
  const {
    data: members,
    // isLoading,
    // isError
  } = useQuery(['chatMembers', roomid], () => {
    return getMembers(roomid)
  })
  const membersCount = members?.response?.length
  return (
    <Fixer $top="0">
      <Container>
        <IconWrapper onClick={onClick}>
          <ArrowLeft2 cursor="pointer" />
        </IconWrapper>
        <Grow>
          <Members>{CHAT_TEXTS.groupInfo}</Members>
          <MembersNum>
            {membersCount}
            {CHAT_TEXTS.count}
          </MembersNum>
        </Grow>
        <ToChatList roomid={roomid} />
      </Container>
    </Fixer>
  )
}
export const Fixer = styled.div<{
  $top?: string
  $bottom?: string
  $center?: boolean
}>`
  position: sticky;
  overflow-x: hidden;
  overflow-y: ${props => (props.$center ? 'scroll' : 'hidden')};
  top: ${props => props.$top};
  bottom: ${props => props.$bottom};
  height: ${props => (props.$center ? 'calc(100vh - 128px)' : '')};
`

const Container = styled(Flexbox)`
  align-items: center;
  height: 64px;
`
const IconWrapper = styled.div`
  padding: 20px 8px 20px 11px;
`

const Members = styled.div`
  font-weight: 600;
  padding-bottom: 2px;
  color: ${props => props.theme.greyScale.grey9};
`
const MembersNum = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding: 2px 0 0 4px;
  color: ${props => props.theme.greyScale.grey6};
`
const Grow = styled.div`
  display: flex;
  flex-grow: 1;
`
