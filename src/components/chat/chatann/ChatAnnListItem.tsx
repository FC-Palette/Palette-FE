import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Flexbox, columnise } from 'styles/index'
import { useCallback } from 'react'

const interpoint = '\u00B7 '
export const ChatAnnListItem = ({ notice, createdAt, memberId }) => {
  const navigate = useNavigate()
  const handleNavigate = useCallback(() => {
    navigate('/chatann')
  }, [])
  return (
    <Wrapper onClick={handleNavigate}>
      <Title>{notice}</Title>
      <Info>
        <Date>{createdAt}</Date>
        {interpoint}
        <Publisher>{memberId}</Publisher>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  ${columnise};
  padding: 14px 22px 0 24px;
  border-bottom: 1px solid ${props => props.theme.greyScale.grey2};
`
const Title = styled.div`
  max-height: 32px;
  overflow: hidden;
`
const Info = styled(Flexbox)`
  white-space: nowrap;
  font-size: 14px;
  padding: 2px 0 13px;
  color: ${props => props.theme.greyScale.grey5};
`
const Date = styled.div`
  padding-right: 5px;
`
const Publisher = styled.div`
  padding-left: 5px;
`
