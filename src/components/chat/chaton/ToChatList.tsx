import { Edit } from 'iconsax-react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { centralise } from 'styles/index'
import { CHAT_TEXTS } from 'constants/index'

export const ToChatList = () => {
  const navigate = useNavigate()

  return (
    <Wrapper
      onClick={() => {
        navigate('/chatannlist')
      }}>
      <Edit size="16" />
      <Notice>{CHAT_TEXTS.register}</Notice>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  ${centralise};
  font-size: 14px;
  padding: 9px 14px;
  box-sizing: content-box;
  border: 1px solid ${props => props.theme.greyScale.grey2};
  border-radius: 8px;
  background-color: ${props => props.theme.main.white};
  margin-right: 24px;
  cursor: pointer;
`
const Notice = styled.div`
  padding-top: 2px;
  padding-left: 2px;
`
