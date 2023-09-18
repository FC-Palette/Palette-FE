import { ArrowLeft2 } from 'iconsax-react'
import { Header } from '@/components'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export const CareerCreateMeetingStaticHeader = () => {
  const navigate = useNavigate()
  return (
    <Header
      leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>
      }
      centerText="모임생성">
      <X onClick={() => navigate('/careerMain')}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.3711 6.69727L6.37109 18.6973"
            stroke="#33363F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.37109 6.69727L18.3711 18.6973"
            stroke="#33363F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </X>
    </Header>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
const X = styled.button`
  cursor: pointer;
`
