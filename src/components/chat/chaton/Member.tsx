import { styled } from 'styled-components'
export const Member = () => {
  return (
    <Wrapper>
      <Image></Image>
      <Username>asdasd</Username>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  padding: 10px 0 9px 16px;
`

const Image = styled.div`
  border: 1px solid red;
  min-width: 32px;
  min-height: 32px;
`

const Username = styled.div`
  padding-top: 7px;
  padding-left: 12px;

  color: ${props => props.theme.greyScale.grey8};
`
