import { styled } from 'styled-components'
import { Image } from 'components/index'
import { Flexbox } from 'styles/index'
import { formatLocalDateTime } from 'utils/index'

export const AnnPublisher = ({ src, createdAt }) => {
  console.log(createdAt, formatLocalDateTime(createdAt))
  return (
    <Wrapper>
      <Image src={src} />
      <AnnInfo>
        <Publisher>고스트 사원</Publisher>
        <Date>{formatLocalDateTime(createdAt)}</Date>
      </AnnInfo>
    </Wrapper>
  )
}
const Wrapper = styled(Flexbox)`
  padding: 11px 0 12px 24px;
`
const AnnInfo = styled.div`
  height: 37px;
  padding-left: 12px;
  font-size: 14px;
`
const Publisher = styled.div`
  font-weight: 600;
`
const Date = styled.div`
  padding-top: 4px;
  color: ${props => props.theme.greyScale.grey5};
`
