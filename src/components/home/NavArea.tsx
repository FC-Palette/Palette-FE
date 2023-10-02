import { styled } from 'styled-components'
import { columnise } from 'styles/index'
//흰 배경 영역
export const NavArea = ({ children }) => {
  return <Area>{children}</Area>
}
export const Area = styled.div`
  ${columnise};
  position: relative;
  z-index: 100;
  margin: 0 24px 24px;
  border-radius: 16px;
  background-color: ${props => props.theme.main.white};
`
