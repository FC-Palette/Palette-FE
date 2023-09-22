import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const PreviewUrl = ({ shopUrl }) => {
  return <Wrapper>{shopUrl}</Wrapper>
}
const Wrapper = styled.div`
  margin-left: 24px;
  width: 350px;
  height: 215px;
  border-radius: 8px;
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.main.black};
  font-weight: 600;
  height: 100px;
  background-color: ${theme.greyScale.grey3};
  margin-top: 24px;
  margin-bottom: 5%;
`
