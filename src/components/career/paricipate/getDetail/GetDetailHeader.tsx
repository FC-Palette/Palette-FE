import { Header } from '@/components'
import { ArrowLeft2, Heart, More, Send2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const GetDetailHeader = () => {
  const isManager = false

  const dynamicHeaderIcon = (isManager: boolean) => {
    return isManager ? (
      <MultiIconWrap>
        <Send2 />
        <More />
      </MultiIconWrap>
    ) : (
      <MultiIconWrap>
        <Send2 />
        <Heart />
      </MultiIconWrap>
    )
  }

  const navigate = useNavigate()
  return (
    <>
      <Header
        leftIcon={
          <StyledIcon onClick={() => navigate(-1)}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText={'Fetch Title'}>
        {dynamicHeaderIcon(isManager)}
      </Header>
    </>
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
