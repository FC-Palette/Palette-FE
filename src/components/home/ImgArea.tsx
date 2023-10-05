import { styled } from 'styled-components'
import { HomeLayer } from 'components/index'
export const ImgArea = () => {
  return (
    <ImgContainer>
      <HomeLayer />
    </ImgContainer>
  )
}
const ImgContainer = styled.div`
  height: 429px;
  width: 100%;
  position: fixed;
  max-width: 430px;
  top: 0;
  z-index: 10;
  background-color: ${props => props.theme.main.blue0};
`
