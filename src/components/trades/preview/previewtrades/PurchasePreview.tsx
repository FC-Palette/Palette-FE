import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import {
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
import { tradescreateglobalstate, ImageState } from 'recoil/index'
import {
  PurchaseInfo,
  PreviewPrice,
  PreviewCategory,
  PreviewHeader,
  PreviewUrl
} from 'components/trades/preview/index'

export const PurchasePreview = () => {
  const tradesGlobalState = useRecoilValue(tradescreateglobalstate)
  const {
    title,
    description,
    price,
    startDate,
    endDate,

    headCount,
    shopUrl,
    category
  } = tradesGlobalState

  const imageGlobalState = useRecoilValue(ImageState)
  const { file } = imageGlobalState

  return (
    <>
      <PreviewHeader title={title} />
      <Wrapper>
        <GetThumbnail meetupImages={file} />
        <GetRoomManagerInfo />
        <PreviewPrice price={price} />
        <GetTitleAndDescription
          detailText="아직 이 공동거래에 대한 소개가 작성되지 않았어요."
          meetupTitle={title}
          meetupDescription={description}
        />
        <PreviewCategory category={category} />
        <GetStats />
        <PurchaseInfo
          currentCount="1"
          startDay={startDate}
          endDay={endDate}
          timeRemaining={''}
          headCount={headCount}
        />
        <PreviewUrl shopUrl={shopUrl} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`
//
