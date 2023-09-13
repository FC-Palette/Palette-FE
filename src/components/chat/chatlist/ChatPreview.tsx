import { PreviewContent, PreviewTitle } from 'components/index'
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
  display: flex;
  flex-direction: column;
  width: 275px;
  overflow: hidden;
  border: 1px solid black;
`