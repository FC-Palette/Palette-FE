import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import {
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
import { iconMapping1 } from 'components/common/index'
import { secondhandcreateglobalstate } from 'recoil/index'
import {
  SecondHandInfo,
  PreviewPrice,
  PreviewCategory,
  PreviewHeader
} from 'components/trades/preview/index'

export const SecondHandPre = () => {
  const secondHandGlobalState = useRecoilValue(secondhandcreateglobalstate)
  const {
    tradesImages,
    title,
    description,
    price,
    selectedDays,
    transactionStartTime,
    transactionEndTime,
    category
  } = secondHandGlobalState
  const categoryLabel = iconMapping1[category]?.label || '미리보기'

  return (
    <>
      <PreviewHeader title={title} />
      <Wrapper>
        <GetThumbnail meetupImages={tradesImages} />
        <GetRoomManagerInfo />
        <PreviewPrice price={price} />
        <GetTitleAndDescription
          detailText="아직 이 중고거래에 대한 소개가 작성되지 않았어요."
          meetupTitle={title}
          meetupDescription={description}
        />
        <PreviewCategory category={categoryLabel} />
        <GetStats />
        <SecondHandInfo
          selectedDays={selectedDays}
          transactionStartTime={transactionStartTime}
          transactionEndTime={transactionEndTime}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`
//
