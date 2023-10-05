import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Flexbox, columnise } from 'styles/index'
import { formatHourMinute, formatLocalDateTime } from 'utils/index'
import { useSetRecoilState } from 'recoil'
import { noticeState } from '@/recoil'

const interpoint = '\u00B7 '
export const ChatAnnListItem = ({ notice, createdAt, memberId, noticeId }) => {
  const navigate = useNavigate()
  const setNotice = useSetRecoilState(noticeState)

  const handleNavigate = () => {
    setNotice(noticeId)
    navigate('/chatann')
  }
  return (
    <Wrapper onClick={handleNavigate}>
      <Title>{notice}</Title>
      <Info>
        <Date>
          {formatLocalDateTime(createdAt).split('일')[0]}일{' '}
          {formatHourMinute(createdAt)}
        </Date>
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
