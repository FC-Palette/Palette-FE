import {
  CareerMainItemCategory,
  CareerMainItemImage,
  CareerMainItemParticipant,
  CareerMainItemTitle,
  CareerMainItemMeetingTime,
  CareerMainItemLikeButton
} from 'components/career/index'
import { useNavigate } from 'react-router-dom'
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
  recruitedPersonnel: string
  headCount: number
  likemsg?: boolean
  closing?: boolean
}
export const CareerMainItemsWrap = ({ data }: { data: CareerData }) => {
  const navigate = useNavigate()

  const {
    id,
    image,
    jobs,
    title,
    week,
    days,
    time,
    progressTime,
    positions,
    recruitedPersonnel,
    headCount,
    likemsg
  } = data

  const handleDetail = () => {
    navigate(`/detail/${id}`)
  }

  // headCount: 모집 인원수, recruitedPersonnel:모집된 인원수
  const remainingSeats: number = headCount - +recruitedPersonnel

  return (
    <Wrap>
      <ItemFlexRowWrapper onClick={handleDetail}>
        {/* 이미지 */}
        <CareerMainItemImage
          image={image[0]}
          remainingSeats={remainingSeats}
        />

        <ItemFlexColumnWrapper>
          {/* 글 묶음 */}
          <CareerMainItemCategory
            jobs={jobs}
            remainingSeats={remainingSeats}
          />
          <CareerMainItemTitle
            title={title}
            remainingSeats={remainingSeats}
          />
          <CareerMainItemMeetingTime
            remainingSeats={remainingSeats}
            week={week}
            days={days || '월요일'}
            time={time}
            progressTime={progressTime}
          />

          <CareerMainItemParticipant
            remainingSeats={remainingSeats}
            positions={positions}
            recruitedPersonnel={recruitedPersonnel}
            headCount={headCount}
          />
        </ItemFlexColumnWrapper>
      </ItemFlexRowWrapper>
      <LikeWrap>
        <CareerMainItemLikeButton
          meetingId={id}
          likemsg={likemsg}
        />
      </LikeWrap>
    </Wrap>
  )
}

const ItemFlexRowWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 132px;
  margin-top: 5%;
  margin-left: 5%;
  gap: 20px;
`

const ItemFlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 8px;
`

const Wrap = styled.div`
  display: flex;
  cursor: pointer;
  &:last-child {
    padding-bottom: 80px;
  }
`

const LikeWrap = styled.div`
  margin-top: 66px;
  position: absolute;
  left: 90%;
`
