import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import {
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
import { iconMapping1 } from 'components/common/index'
import { tradescreateglobalstate } from 'recoil/index'
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
    images,
    title,
    description,
    price,
    startDay,
    endDay,
    timeRemaining,
    headCount,
    shopUrl,
    category
  } = tradesGlobalState
  const categoryLabel = iconMapping1[category]?.label || '미리보기'

  return (
    <>
      <PreviewHeader title={title} />
      <Wrapper>
        <GetThumbnail meetupImages={images} />
        <GetRoomManagerInfo />
        <PreviewPrice price={price} />
        <GetTitleAndDescription
          meetupTitle={title}
          meetupDescription={description}
        />
        <PreviewCategory category={categoryLabel} />
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
