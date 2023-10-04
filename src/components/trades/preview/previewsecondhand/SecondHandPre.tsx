import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import {
  GetRoomManagerInfo,
  GetStats,
  GetThumbnail,
  GetTitleAndDescription
} from 'components/career/create/isUserInfo/index'
// import { secondhandcreateglobalstate, ImageState } from 'recoil/index'
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
    title,
    description,
    price,
    selectedDays,
    transactionStartTime,
    transactionEndTime,
    category
  } = secondHandGlobalState

  // const imageGlobalState = useRecoilValue(ImageState)
  // const { file } = imageGlobalState

  return (
    <>
      <PreviewHeader title={title} />
      <Wrapper>
        <GetThumbnail />
        <GetRoomManagerInfo />
        <PreviewPrice price={price} />
        <GetTitleAndDescription
          detailText="아직 이 중고거래에 대한 소개가 작성되지 않았어요."
          title={title}
          description={description}
        />
        <PreviewCategory category={category} />
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
  margin-bottom: 50px;
`
//
