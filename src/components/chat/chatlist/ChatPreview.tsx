import { PreviewContent, PreviewTitle } from 'components/index'
import { columnise } from 'styles/index'
import { styled } from 'styled-components'
export const ChatPreview = ({ title, members, msg }) => {
  return (
    <Wrapper>
      <PreviewTitle
        title={title}
        members={members}></PreviewTitle>
      <PreviewContent msg={msg}></PreviewContent>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  ${columnise};
  overflow: hidden;
  max-width: auto;
  word-break: keep-all;
`
