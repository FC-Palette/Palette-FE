import {
  CareerMainItemCategory,
  CareerMainItemImage,
  CareerMainItemParticipant,
  CareerMainItemTitle,
  CareerMainItemMeetingTime,
  CareerMainItemLikeButton
} from 'components/career/index'
import styled from 'styled-components'

interface CareerData {
  id: number
  image: string[]
  jobs: string[]
  title: string
  week: string
  days: string[]
  time: string
  progressTime: string
  positions: string[]
}
export const CareerMainItemsWrap = ({ data }: { data: CareerData }) => {
  const { image, jobs, title, week, days, time, progressTime, positions } = data
  return (
    <Wrap>
      <ItemFlexRowWrapper>
        {/* 이미지 */}
        <CareerMainItemImage image={image[0]} />

        <ItemFlexColumnWrapper>
          {/* 글 묶음 */}
          <CareerMainItemCategory jobs={jobs} />
          <CareerMainItemTitle title={title} />
          <CareerMainItemMeetingTime
            week={week}
            days={days}
            time={time}
            progressTime={progressTime}
          />

          <CareerMainItemParticipant positions={positions} />
        </ItemFlexColumnWrapper>
        <CareerMainItemLikeButton />
      </ItemFlexRowWrapper>
    </Wrap>
  )
}

// 가로 래퍼
const ItemFlexRowWrapper = styled.div`
  gap: 12px;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 132px;
  margin: 12px 24px;
`
// 세로 래퍼
const ItemFlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 8px;
`


const Wrap = styled.div`

  &:last-child {
    padding-bottom: 80px;
  }
`