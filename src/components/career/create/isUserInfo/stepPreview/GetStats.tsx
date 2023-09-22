// 좋아요수, 조회수, 게시글 생성시간 등
import { CommonLikeIcon, CommonViewIcon } from '@/components'
import styled from 'styled-components'

export const GetStats = () => {
  return (
    <>
      <Container>
        <IconWrap>
          <CommonLikeIcon size={17} />0
          <CommonViewIcon size={17} />0<Dot>・</Dot>
          <Time>1분 전</Time>
        </IconWrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 430px;
  display: flex;
`

const IconWrap = styled.div`
  display: flex;
  gap: 4px;
  color: ${props => props.theme.greyScale.grey6};
  margin: 12px 24px 0;
`
const Time = styled.div`
  font-size: 14px;
`

const Dot = styled.div``
