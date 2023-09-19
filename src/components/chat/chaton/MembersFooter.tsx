import { styled } from 'styled-components'
import { Fixer } from 'components/index'
import { Logout, Notification } from 'iconsax-react'
export const MembersFooter = ({ onClick }) => {
  return (
    <Fixer $bottom="0">
      <Container>
        <IconWrapper>
          <Notification />
        </IconWrapper>
        <IconWrapper onClick={onClick}>
          <Logout />
        </IconWrapper>
      </Container>
    </Fixer>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 24px 32px;
  background-color: ${props => props.theme.main.white};
`
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`
