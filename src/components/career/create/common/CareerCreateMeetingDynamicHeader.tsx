import { ArrowLeft2, More, Send2 } from 'iconsax-react'
import { Header } from '@/components'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export const CareerCreateMeetingHeaderDynamic = ({ meetupTitle }) => {
  const navigate = useNavigate()

  const maxLength = 10
  const titleSlice = (title: string, mLength) => {
    return title.length > mLength ? title.slice(0, mLength) + '..' : title
  }
  return (
    <Header
      leftIcon={
        <StyledIcon onClick={() => navigate(-1)}>
          <ArrowLeft2 />
        </StyledIcon>
      }
      centerText={
        meetupTitle ? titleSlice(meetupTitle, maxLength) : '미리보기'
      }>
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
