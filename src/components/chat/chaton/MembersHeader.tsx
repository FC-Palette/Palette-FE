import { styled } from 'styled-components'
import { ArrowLeft2, More } from 'iconsax-react'
import { ToChatList } from 'components/index'

export const MembersHeader = ({ onClick }) => {
  return (
    <Fixer top="0">
      <Container>
        <IconWrapper
          position="left"
          onClick={onClick}>
          <ArrowLeft2 />
        </IconWrapper>
        <Grow>
          <Members>참여인원</Members>
          <MembersNum>3명</MembersNum>
        </Grow>
        <ToChatList />
      </Container>
    </Fixer>
  )
}
export const Fixer = styled.div<{
  top?: string
  bottom?: string
  center?: boolean
}>`
  position: sticky;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  height: ${props => (props.center ? '100%' : '')};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`
const IconWrapper = styled.div<{ position: string }>`
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