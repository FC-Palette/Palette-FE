import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const interpoint = '\u00B7 '
export const ChatAnnListItem = ({ content, time, publisher }) => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Title
        onClick={() => {
          navigate('/chatannlist')
        }}>
        {content}
      </Title>
      <Info>
        <Date>{time}</Date>
        {interpoint}
        <Publisher>{publisher}</Publisher>
      </Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 14px 22px 0 24px;
  border-bottom: 1px solid ${props => props.theme.greyScale.grey2};
`
const Title = styled.div``
const Info = styled.div`
  display: flex;
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
