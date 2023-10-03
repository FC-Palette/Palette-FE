/* 채팅방 상단 공지(토글X) (ChatAnn.tsx)
모임/상품 정보(토글) (ChatSubject.tsx) 
감싸는 컴포넌트 
*/
import { styled } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { inDetailState, isBuyingState, isPersonalState } from 'recoil/index'
import { useQuery } from '@tanstack/react-query'
import { getAccount, getNotice } from 'api/index'

import {
  ChatAnn,
  ChatSubject,
  SubjectDetail,
  AccountInfo
} from 'components/index'
export const ChatInfo = ({ roomid }) => {
  const inDetail = useRecoilValue(inDetailState)

  const {
    data: notice,
    isLoading,
    isError
  } = useQuery(['notice', roomid], () => {
    return getNotice(roomid)
  })
  console.log(notice)
  const registered = notice?.response?.notice

  const contentNotice = notice?.response?.contentNotice
  const type = contentNotice?.type
  const isBuying =
    contentNotice?.type === 'PURCHASE' || contentNotice?.type === 'SECONDHAND'
  // isPersonal => 개인 챗 조건 추가 확인 필요
  const isPersonal = type => {
    const chatTypes = ['PURCHASE', 'SECONDHAND', 'MEETING']
    if (chatTypes.includes(type)) {
      return false
    }
    return true
  }
  console.log(isPersonal(type), type)
  return (
    <InfoWrapper>
      {!isPersonal(type) && <ChatSubject isBuying={isBuying}></ChatSubject>}
      {inDetail && (
        <SubjectDetail
          src={contentNotice?.image}
          title={contentNotice?.title}
          week={contentNotice?.week}
          price={contentNotice?.price}
          isBuying={isBuying}
          $shared={false}
        />
      )}
      {inDetail && isBuying && (
        <AccountInfo
          isHost={false}
          account={'신한은행 123-4444-67897-12 김*운'}
        />
      )}
      <ChatAnn
        $registered={registered}
        $personal={isPersonal(type)}></ChatAnn>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  box-shadow: 0px 3px 6px 0px rgba(187, 187, 210, 0.3);
`

// const {
//   data: account,
//   isLoading,
//   isError
// } = useQuery(['account', contentId], () => {
//   return getNotice(contentId)
// })
