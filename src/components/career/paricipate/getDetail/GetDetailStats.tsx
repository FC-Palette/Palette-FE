import { CommonLikeIcon, CommonViewIcon } from '@/components'
import { fetchDetailGlobalState } from '@/recoil'
import { getTimeDiff } from '@/utils'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const GetDetailStats = () => {
  const atom = useRecoilValue(fetchDetailGlobalState)
  const { hits, likes, createdAt } = atom
  const serverDate = new Date(createdAt)
  const timeAgoText = getTimeDiff(serverDate)

  useEffect(() => {}, [likes, hits, timeAgoText])

  return (
    <>
      <Container>
        <IconWrap>
          <CommonLikeIcon size={16} />
          {likes}
          <CommonViewIcon size={16} />
          {hits}
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
