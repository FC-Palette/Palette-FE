import { styled } from 'styled-components'
import { UnreadTime, UnreadCount } from 'components/index'

export const UnreadInfo = () => {
  return (
    <Wrapper>
      <UnreadTime />
      <UnreadCount />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 24px 28px 0;
`
