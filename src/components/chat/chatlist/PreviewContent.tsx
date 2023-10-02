import { styled } from 'styled-components'
export const PreviewContent = ({ msg }) => {
  return <Wrapper>{msg}</Wrapper>
}

const Wrapper = styled.div`
  max-height: 30px;
  padding-top: 4px;
  overflow: hidden;
  word-break: break-all;
  font-size: 14px;
  color: ${props => props.theme.greyScale.grey6};
`
