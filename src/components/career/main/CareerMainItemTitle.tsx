import { styled } from 'styled-components'
export const CareerMainItemTitle = ({ title }) => {
  
  return <Title>{title.length > 15 ? title.slice(0,10) + '...' : title || '없음'}</Title>
}

const Title = styled.div`
  color: ${props => props.theme.greyScale.grey9};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 600;
`
