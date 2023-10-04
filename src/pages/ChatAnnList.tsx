import { Header, ChatAnnListItems, ChatAnnListItem } from 'components/index'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'
import { getNoticeList } from 'api/index'
import { useQuery } from '@tanstack/react-query'
import { roomIdState } from 'recoil/index'
import { useRecoilValue } from 'recoil'

/*
{
	"status": 200, 
	"success": true,
	"response": [
		{
			"noticeId" : 1, 
			"notice" : "공지 확인해주세요",
	    "memberId" : 1,
			"profileImgUrl" : "https://",
	    "createdAt" : 23.09.18,
			"host" : 2
		},
		...
	] 
}
*/
// 1. 채팅방 멤버를 불러온다.
// 2. 멤버들을 상태에 저장한다.
// 3. 상태에 저장한 멤버 내에서 공지의 멤버 아이디를 비교한다.
// 4. 일치하는 멤버의 닉네임을 불러온다.
// => 공지에 memberId만 있기 때문에
export const ChatAnnList = () => {
  const navigate = useNavigate()
  const roomId = useRecoilValue(roomIdState)

  const {
    data: notices
    // isLoading,
    // isError
  } = useQuery(['notices', roomId], () => {
    return getNoticeList(roomId)
  })

  return (
    <>
      <Header
        centerText="공지목록"
        leftIcon={
          <ArrowLeft2
            cursor="pointer"
            onClick={() => {
              navigate('/chat')
            }}
          />
        }></Header>
      <ChatAnnListItems>
        {/* 응답에 맞춰 수정필요 */}
        {notices &&
          notices.response &&
          notices.response.map(({ noticeId, notice, createdAt, memberId }) => (
            <ChatAnnListItem
              key={noticeId}
              notice={notice}
              createdAt={createdAt}
              memberId={memberId}
            />
          ))}
      </ChatAnnListItems>
    </>
  )
}
