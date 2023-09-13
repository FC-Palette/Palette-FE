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
  /* padding-right: 24px;
  padding-bottom: 28px;
  padding-top: 10px; */
  padding: 10px 24px 28px 0;
  /* height: 50px; */
  /* border: 1px sol  id black; */
`
