import { Header, ChatAnnListItems, ChatAnnListItem } from 'components/index'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft2 } from 'iconsax-react'
import { getNoticeList } from 'api/index'
import { useQuery } from '@tanstack/react-query'
import { inDetailState, roomIdState, showMembersState } from 'recoil/index'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useEffect } from 'react'
import { CHAT_TEXTS } from 'constants/index'

export const ChatAnnList = () => {
  const navigate = useNavigate()
  const roomId = useRecoilValue(roomIdState)
  const setShowMembers = useSetRecoilState(showMembersState)
  const setInDetail = useSetRecoilState(inDetailState)

  const handleHistory = () => {
    setShowMembers(false)
    setInDetail(false)
  }

  const { data: notices } = useQuery(['notices', roomId], () => {
    return getNoticeList(roomId)
  })
  const handleGoBack = () => {
    navigate('/chat')
    handleHistory()
  }
  console.log(notices)
  useEffect(() => {
    window.onpopstate = handleHistory
  }, [])

  return (
    <>
      <Header
        centerText={CHAT_TEXTS.annList}
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
              noticeId={noticeId}
              createdAt={createdAt}
              // 닉네임으로 바꿔띄우기
              memberId={memberId}
            />
          ))}
      </ChatAnnListItems>
    </>
  )
}
