import { styled } from 'styled-components'
export const ChatAnnListItems = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
`
