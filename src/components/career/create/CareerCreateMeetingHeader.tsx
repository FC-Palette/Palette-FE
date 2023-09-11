import { ArrowLeft2 } from 'iconsax-react'
import { Header } from '@/components'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export const CareerCreateMeetingHeader = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }
  return (
    <Header
      leftIcon={
        <StyledIcon onClick={() => handleBackClick}>
          <ArrowLeft2 />
        </StyledIcon>
      }
      centerText="모임생성">
      <Xbtn>X</Xbtn>
    </Header>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const Xbtn = styled.button`
  text-align: center;
  font-weight: 100;
  font-size: ${props => props.theme.customSize.xxlarge};
  width: 24px;
  height: 24px;
`
