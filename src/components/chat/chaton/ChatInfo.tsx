/* 채팅방 상단 공지(토글X) (ChatAnn.tsx)
모임/상품 정보(토글) (ChatSubject.tsx) 
감싸는 컴포넌트 
*/
import { styled } from 'styled-components'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  inDetailState,
  noticeState,
  roomIdState,
  chatTypeState
} from 'recoil/index'
import { useQuery } from '@tanstack/react-query'
import { getNotice } from 'api/index'
import { useNavigate } from 'react-router-dom'

import {
  ChatAnn,
  ChatSubject,
  SubjectDetail,
  AccountInfo
} from 'components/index'
import { useEffect } from 'react'

export const ChatInfo = () => {
  const navigate = useNavigate()
  const inDetail = useRecoilValue(inDetailState)
  const roomId = useRecoilValue(roomIdState)
  // const setNotice = useSetRecoilState(noticeState)
  const setChatType = useSetRecoilState(chatTypeState)

  const { data: notice } = useQuery(
    ['notice', roomId],
    () => {
      return getNotice(roomId)
    },
    {
      staleTime: 1000,
      cacheTime: Infinity
    }
  )
  const registered = notice?.response?.notice
  const contentNotice = notice?.response?.contentNotice
  const type = contentNotice?.type
  // 추가예정
  // const noticeId = notice?.response?.noticeId

  const toDetail = () => {
    // setNotice(noticeId)
    console.log('clicked')
    navigate('/chatann')
  }

  const isBuying =
    contentNotice?.type === 'PURCHASE' || contentNotice?.type === 'SECONDHAND'
  const isPersonal = type => {
    const chatTypes = ['PURCHASE', 'SECONDHAND', 'MEETING']
    if (chatTypes.includes(type)) {
      return false
    }
    return true
  }

  useEffect(() => {
    setChatType(type)
  }, [])
  return (
    <InfoWrapper>
      {/* 1. 개인챗이 아니면, 모임/구매정보 토글탭을 띄운다  */}
      {!isPersonal(type) && <ChatSubject isBuying={isBuying}></ChatSubject>}
      {/* 2. 토글 클릭시, 상세 정보를 렌더링한다 */}
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
      {/* 3. 모임이 아닌 구매관련정보일 때, 계좌를 띄운다 */}
      {inDetail && isBuying && (
        <AccountInfo
          isHost={false}
          // account={'신한은행 123-4444-67897-12 김*운'}
        />
      )}
      {/* 4. 등록된 공지가 있을 때, 렌더링  */}
      <ChatAnn
        $registered={registered}
        $personal={isPersonal(type)}
        onClick={toDetail}
      />
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
