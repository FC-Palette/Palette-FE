import { styled } from 'styled-components'

export const MembersLayer = () => {
  return <Layer>MembersLayer</Layer>
}

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 73.25%;
  background-color: ${props => props.theme.greyScale.bluegrey};
`
