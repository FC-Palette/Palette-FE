import { styled } from 'styled-components'
export const Member = () => {
  return (
    <Wrapper>
      <Image src="https://avatars.githubusercontent.com/u/142562921?s=200&v=4"></Image>
      <Username>고스트 사원</Username>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  padding: 10px 0 9px 16px;
`

export const Image = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-size: contain;
  min-width: 32px;
  height: 32px;
`

const Username = styled.div`
  padding-top: 7px;
  padding-left: 12px;

  color: ${props => props.theme.greyScale.grey8};
`
