import { styled } from 'styled-components'
export const UnreadCount = () => {
  return <Wrapper>100</Wrapper>
}

const Wrapper = styled.div`
  border-radius: 15px;
  background-color: ${props => props.theme.subColor.prettyRed};
  align-self: end;
  font-weight: 700;
  font-size: 10px;
  line-height: 15px;
  color: ${props => props.theme.main.white};
  padding: 3px 6px;
  /* position: absolute; */
`
