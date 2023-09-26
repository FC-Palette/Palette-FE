/* 채팅방 상단 공지(토글X) (ChatAnn.tsx)
모임/상품 정보(토글) (ChatSubject.tsx) 
감싸는 컴포넌트 
*/
import { styled } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { inDetailState, isBuyingState, isPersonalState } from 'recoil/index'

import {
  ChatAnn,
  ChatSubject,
  SubjectDetail,
  AccountInfo
} from 'components/index'
export const ChatInfo = () => {
  const inDetail = useRecoilValue(inDetailState)
  const isBuying = useRecoilValue(isBuyingState)
  const isPersonal = useRecoilValue(isPersonalState)

  return (
    <InfoWrapper>
      {!isPersonal && <ChatSubject></ChatSubject>}
      {inDetail && <SubjectDetail $shared={false} />}
      {inDetail && isBuying && (
        <AccountInfo
          isHost={false}
          account={'신한은행 123-4444-67897-12 김*운'}
        />
      )}
      <ChatAnn
        $registered={true}
        $personal={isPersonal}></ChatAnn>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  box-shadow: 0px 3px 6px 0px rgba(187, 187, 210, 0.3);
`
