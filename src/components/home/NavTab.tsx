import { styled } from 'styled-components'
import { columnise, theme } from 'styles/index'
import {
  InfoCircle,
  MessageNotif,
  MagicStar,
  Car,
  DirectboxNotif,
  Like,
  Card,
  Building4,
  EmojiHappy,
  BagHappy
} from 'iconsax-react'
import { useNavigate } from 'react-router-dom'

const dynamic = {
  InfoCircle,
  MessageNotif,
  MagicStar,
  Car,
  DirectboxNotif,
  Like,
  Card,
  Building4,
  EmojiHappy,
  BagHappy
}

export const NavTab = ({ icon, title }) => {
  const navigate = useNavigate()
  const DynamicComponent = dynamic[icon]
  const toCareer = () => {
    navigate('/career')
  }
  const toPurchase = () => {
    navigate('/grouppurchase')
  }
  const navActions =
    icon === 'EmojiHappy'
      ? toCareer
      : icon === 'BagHappy'
      ? toPurchase
      : undefined

  return (
    <NavContainer onClick={navActions}>
      <Icon>
        <DynamicComponent
          variant={
            icon === 'EmojiHappy' || icon === 'BagHappy' ? 'Bold' : 'TwoTone'
          }
          color={
            icon === 'EmojiHappy' || icon === 'BagHappy'
              ? theme.subColor.greenL2
              : theme.main.blue0
          }
        />
      </Icon>
      <Title>{title}</Title>
    </NavContainer>
  )
}
const NavContainer = styled.div`
  ${columnise};
  align-items: center;
  cursor: pointer;
`

const Icon = styled.div`
  padding: 8px;
`

const Title = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.greyScale.grey9};
`
