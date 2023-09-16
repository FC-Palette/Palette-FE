import { ArrowLeft2, More, Send2 } from 'iconsax-react'
import { Header } from '@/components'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export const CareerCreateMeetingHeaderDynamic = () => {
  const navigate = useNavigate()

  return (
    <Header
      leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>
      }
      centerText={'모임 제목이 들어갈 자리'}>
      <MultiIconWrap>
        <Send2 />
        <More />
      </MultiIconWrap>
    </Header>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const MultiIconWrap = styled.div`
  display: flex;
  width: 58px;
  gap: 10px;
  font-weight: 100;
  font-size: ${props => props.theme.customSize.xxlarge};
  height: 24px;
`
