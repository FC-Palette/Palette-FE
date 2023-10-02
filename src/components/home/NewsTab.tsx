import { styled } from 'styled-components'
import { Flexbox } from 'styles/index'
export const NewsTab = ({ title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  )
}

const Wrapper = styled(Flexbox)`
  padding-top: 5px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.greyScale.grey9};
  word-break: keep-all;
  overflow: hidden;
`
const Title = styled.div`
  font-weight: 500;
  max-width: 49px;
  max-height: 17px;
`
const Content = styled.div`
  padding-left: 12px;
  max-height: 17px;
  overflow: hidden;
`
