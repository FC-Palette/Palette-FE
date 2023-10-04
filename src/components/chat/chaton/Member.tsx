import { styled } from 'styled-components'
import { Flexbox } from 'styles/index'
import { decoder } from 'utils/index'
export const Member = ({ memberId, url, name, host }) => {
  // host면 호스트표시, myself면 나표시
  const isHost = memberId === host
  const isMyself = memberId === decoder().memberId
  return (
    <Wrapper>
      <Image src={url} />
      <Username>{name}</Username>
    </Wrapper>
  )
}
const Wrapper = styled(Flexbox)`
  padding: 10px 0 9px 16px;
  cursor: pointer;
`

export const Image = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-size: contain;
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
`

const Username = styled.div`
  padding-top: 7px;
  padding-left: 12px;
  color: ${props => props.theme.greyScale.grey8};
`
