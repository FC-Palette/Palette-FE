import { PreviewContent, PreviewTitle, columnise } from 'components/index'
import { styled } from 'styled-components'
export const ChatPreview = () => {
  return (
    <Wrapper>
      <PreviewTitle></PreviewTitle>
      <PreviewContent></PreviewContent>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  ${columnise};
  overflow: hidden;
  max-width: auto;
  word-break: keep-all;
`
