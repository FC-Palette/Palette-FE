import { styled } from 'styled-components'
export const AnnContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 29px;
  overflow-wrap: break-word;
  word-break: keep-all;
  min-height: calc(100vh - 140px);
`
