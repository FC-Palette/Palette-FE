import { styled } from 'styled-components'
export const MessageTime = ({ time, sender }) => {
  return <Wrapper sender={sender}>{time}</Wrapper>
}
const Wrapper = styled.div<{ sender: string }>`
  min-width: 45px;
  color: ${props => props.theme.greyScale.grey4};
  font-size: 10px;
  align-self: self-end;
  box-sizing: content-box;
  padding: ${props => (props.sender === 'sender' ? '0 8px 0 0' : '0 0 0 8px ')};
`
