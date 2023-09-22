import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import {
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
import { tradescreateglobalstate } from 'recoil/index'
import {
  PurchaseInfo,
  PreviewPrice,
  PreviewUrl
} from 'components/trades/previewtrades/index'

export const PurchasePreview = () => {
  const tradesGlobalState = useRecoilValue(tradescreateglobalstate)
  const {
    images,
    title,
    description,
    price,
    category,
    startDay,
    endDay,
    timeRemaining,
    headCount,
    shopUrl
  } = tradesGlobalState

  return (
    <>
      <Wrapper>
        <GetThumbnail meetupImages={images} />
        <GetRoomManagerInfo />
        <PreviewPrice price={price} />
        <GetTitleAndDescription
          meetupTitle={title}
          meetupDescription={description}
        />
        {/* <GetMeetingCategory selectedMeetingTypes={category} /> */}
        <GetStats />
        <PurchaseInfo
          startDay={startDay}
          endDay={endDay}
          timeRemaining={timeRemaining}
          headCount={headCount}
        />
        <PreviewUrl shopUrl={shopUrl} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
//
