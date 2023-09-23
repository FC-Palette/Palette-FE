import { styled } from 'styled-components'
export const ChatRoomImg = ({ src }) => {
  return <Wrapper src={src}></Wrapper>
}

const Wrapper = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-size: contain;
  min-width: 45px;
  height: 45px;
  border-radius: 16px;
  margin: 18px 8px 18px 0;
`
