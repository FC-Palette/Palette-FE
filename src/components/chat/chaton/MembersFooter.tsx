import { styled } from 'styled-components'
import { Fixer } from 'components/index'
import { Logout, Notification } from 'iconsax-react'
import { Flexbox } from 'styles/index'

export const MembersFooter = ({ onClick, roomid }) => {
  return (
    <Fixer $bottom="0">
      <Container>
        <Notification
          size="24"
          cursor="pointer"
        />
        <Logout
          size="24"
          cursor="pointer"
          onClick={onClick}
        />
      </Container>
    </Fixer>
  )
}

const Container = styled(Flexbox)`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 32px;
  background-color: ${props => props.theme.main.white};
`
