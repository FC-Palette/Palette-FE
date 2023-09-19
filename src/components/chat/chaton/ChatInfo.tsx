/* 채팅방 상단 공지(토글X) (ChatAnn.tsx)
모임/상품 정보(토글) (ChatSubject.tsx) 
감싸는 컴포넌트 
*/
import { styled } from 'styled-components'
import { ChatAnn, ChatSubject } from 'components/index'
export const ChatInfo = () => {
  return (
    <InfoWrapper>
      <ChatSubject
        isBuying={true}
        inDetail={false}></ChatSubject>
      <ChatAnn $registered={true}></ChatAnn>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  position: sticky;
  top: 80px;
  box-shadow: 0px 3px 6px 0px rgba(187, 187, 210, 0.3);
`
