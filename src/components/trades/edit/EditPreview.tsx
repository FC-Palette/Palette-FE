import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import {
  GetRoomManagerInfo,
  GetStats,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
import { tradesModifyGlobalState, editPurchaseImage } from 'recoil/index'
import {
  PurchaseInfo,
  PreviewPrice,
  PreviewCategory,
  PreviewHeader,
  PreviewUrl
} from 'components/trades/preview/index'
import { Thumbnail } from 'components/trades/detail/index'

export const EditPurchasePreview = () => {
  const tradesModify = useRecoilValue(tradesModifyGlobalState)
  const { description, price, startDate, endDate, headCount, shopUrl } =
    tradesModify

  const editImageState = useRecoilValue(editPurchaseImage)
  const { file } = editImageState

  return (
    <>
      <PreviewHeader title={''} />
      <Wrapper>
        <Thumbnail images={file} />
        <GetRoomManagerInfo />
        <PreviewPrice price={price} />
        <GetTitleAndDescription
          detailText="아직 이 공동거래에 대한 소개가 작성되지 않았어요."
          title={''}
          description={description}
        />
        <PreviewCategory category={''} />
        <GetStats />
        <PurchaseInfo
          currentCount="1"
          startDay={startDate}
          endDay={endDate}
          timeRemaining={endDate}
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
