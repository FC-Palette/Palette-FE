import { Header } from '@/components'
import { ProfileEnterWrap } from 'components/career'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const ProfileEnter = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(-1)
  }

  return (
    <>
      <Header
        leftIcon={
          <StyledIcon onClick={onClickHandler}>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="모임을 위한 간단 프로필"></Header>
        <ProfileEnterWrap />
    </>
  )
}

const StyledIcon = styled.button`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`
