import { ArrowLeft2, More, Send2 } from 'iconsax-react'
import { Header } from 'components/index'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export const PreviewHeader = ({ title }) => {
  const navigate = useNavigate()

  return (
    <Header
      leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>
      }
      centerText={title ? title : '미리보기'}>
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
  gap: 10px;
  font-weight: 100;
  font-size: ${props => props.theme.customSize.xxlarge};
  height: 24px;
`
