import { styled } from 'styled-components'
import { columnise } from 'components/index'

export const MembersLayer = ({ children }) => {
  return <Layer>{children}</Layer>
}

const Layer = styled.div`
  ${columnise};
  position: absolute;
  z-index: 10000;
  top: 0;
  right: 0;
  width: 73.25%;
  height: 100%;
  background-color: ${props => props.theme.greyScale.bluegrey};
`
