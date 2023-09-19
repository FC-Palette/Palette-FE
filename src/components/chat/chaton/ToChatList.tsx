import { Edit } from 'iconsax-react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const ToChatList = () => {
  const navigate = useNavigate()

  return (
    <Wrapper
      onClick={() => {
        navigate('/chatannlist')
      }}>
      <Edit size="16" />
      <Notice>공지</Notice>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  padding: 9px 14px;
  box-sizing: content-box;
  border: 1px solid ${props => props.theme.greyScale.grey2};
  border-radius: 8px;
  background-color: ${props => props.theme.main.white};
  margin-right: 24px;
  cursor: pointer;
`
const Notice = styled.div`
  padding-left: 2px;
`
