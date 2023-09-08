import { styled } from 'styled-components'
export const CareerMainItemTitle = () => {
  return <Title>출근 전 트렌드 분석</Title>
}

const Title = styled.div`
  color: ${props => props.theme.greyScale.grey9};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 600;
  /* margin-top: 5px; */
`
