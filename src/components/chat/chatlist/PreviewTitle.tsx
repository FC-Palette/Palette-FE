import { styled } from 'styled-components'

export const PreviewTitle = ({ title, members }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Members>{members}</Members>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-height: 16px;
  display: flex;
  word-break: break-all;
  line-height: 18px;
`
const Title = styled.div`
  font-weight: 600;
  overflow: hidden;
  color: ${props => props.theme.greyScale.grey9};
`
const Members = styled.div`
  padding-left: 8px;
  color: ${props => props.theme.greyScale.grey4};
`
