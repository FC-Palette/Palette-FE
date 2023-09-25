import { styled } from 'styled-components'
import { UnreadTime, UnreadCount } from 'components/index'
import { columnise } from 'styles/index'
export const UnreadInfo = () => {
  return (
    <Wrapper>
      <UnreadTime />
      <UnreadCount />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${columnise};
  justify-content: space-between;
  padding: 10px 24px 28px 0;
`
