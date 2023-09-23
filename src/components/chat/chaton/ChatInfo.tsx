/* 채팅방 상단 공지(토글X) (ChatAnn.tsx)
모임/상품 정보(토글) (ChatSubject.tsx) 
감싸는 컴포넌트 
*/
import { styled } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { inDetailState, isBuyingState } from 'recoil/index'

import {
  ChatAnn,
  ChatSubject,
  SubjectDetail,
  AccountInfo
} from 'components/index'
export const ChatInfo = () => {
  const inDetail = useRecoilValue(inDetailState)
  const isBuying = useRecoilValue(isBuyingState)

  return (
    <InfoWrapper>
      <ChatSubject></ChatSubject>
      {/* isBuying(모임,상품정보) recoil값으로 전환 후 하단 계좌 컴포넌트 추가 렌더링  */}
      {inDetail && <SubjectDetail />}
      {inDetail && isBuying && <AccountInfo isHost={true} />}
      <ChatAnn $registered={true}></ChatAnn>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  position: sticky;
  z-index: 2;
  /* top: 80px; */
  box-shadow: 0px 3px 6px 0px rgba(187, 187, 210, 0.3);
`
