import { CommonLikeIcon, CommonViewIcon } from '@/components'
import { getTimeDiff } from '@/utils'
import styled from 'styled-components'

export const GetDetailStats = ({ hits, likes, createdAt }) => {
  const fetchLike = likes
  const fetchHits = hits
  const fetchCreatedAt = createdAt
  const serverDate = new Date(fetchCreatedAt)

  const timeAgoText = getTimeDiff(serverDate)

  return (
    <>
      <Container>
        <IconWrap>
          <CommonLikeIcon size={16} />
          {fetchLike}
          <CommonViewIcon size={16} />
          {fetchHits}
          <Dot>・</Dot>
          {timeAgoText}
        </IconWrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
`

const IconWrap = styled.div`
  display: flex;
  gap: 4px;
  color: ${props => props.theme.greyScale.grey6};
  margin: 3.5% 6.4% 0;
  font-size: 14px;
`

const Dot = styled.div``
