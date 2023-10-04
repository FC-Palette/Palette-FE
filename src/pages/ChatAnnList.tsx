import { Header, ChatAnnListItems, ChatAnnListItem } from 'components/index'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'
import { getNoticeList } from 'api/index'
import { useQuery } from '@tanstack/react-query'
import { roomIdState, showMembersState } from 'recoil/index'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'

export const ChatAnnList = () => {
  const navigate = useNavigate()
  const roomId = useRecoilValue(roomIdState)
  const setShowMembers = useSetRecoilState(showMembersState)

  const handleHistory = () => {
    setShowMembers(false)
  }

  const {
    data: notices
    // isLoading,
    // isError
  } = useQuery(['notices', roomId], () => {
    return getNoticeList(roomId)
  })

  const handleGoBack = () => {
    navigate('/chat')
    setShowMembers(false)
  }

  useEffect(() => {
    window.onpopstate = handleHistory
  }, [])

  return (
    <>
      <Header
        centerText="공지목록"
        leftIcon={
          <ArrowLeft2
            cursor="pointer"
            onClick={handleGoBack}
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
