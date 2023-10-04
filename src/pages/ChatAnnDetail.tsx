import { styled } from 'styled-components'
import { Header, AnnPublisher, AnnContent, Wrapper } from 'components/index'
import { useNavigate } from 'react-router-dom'
import { Flexbox } from 'styles/index'
import { AlignIcon, CloseIcon } from 'components/index'
import { noticeState, showMembersState } from 'recoil/index'
import { useSetRecoilState } from 'recoil'
import { CHAT_TEXTS } from 'constants/index'
import { roomIdState } from 'recoil/index'
import { useRecoilValue } from 'recoil'
import { getNoticeList, getNotice } from 'api/index'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const ChatAnnDetail = () => {
  const notice = useRecoilValue(noticeState)
  console.log(notice)
  const navigate = useNavigate()
  const roomId = useRecoilValue(roomIdState)
  const [filteredAnn, SetFilteredAnn] = useState({})

  const setShowMembers = useSetRecoilState(showMembersState)
  const backToChat = () => {
    navigate('/chat')
    setShowMembers(false)
  }
  const backToAnnList = () => {
    navigate('/chatannlist')
  }
  // const { data: notice } = useQuery(['notice', roomId], () => {
  //   return getNotice(roomId)
  // })
  const { data: notices } = useQuery(['notices', roomId], () => {
    return getNoticeList(roomId)
  })

  /*
  1. 채팅방 공지 => useLocation으로 state들고오자, 
  2. 리스트 => 마찬가지?
  => 객체 반환, 값 뽑아서 렌더링
*/
  useEffect(() => {
    const noticeView = notices.response.find(v => v.noticeId === notice)
    console.log(noticeView)
    SetFilteredAnn(noticeView)
  }, [])

  return (
    <>
      <Header
        centerText={CHAT_TEXTS.inDetail}
        leftIcon={<CloseIcon />}
        cancelClick={backToChat}>
        <ToAnnList onClick={backToAnnList}>
          <AlignIcon />
          <Text>{CHAT_TEXTS.annList}</Text>
        </ToAnnList>
      </Header>

      <Wrapper>
        <AnnPublisher
          src={filteredAnn.profileImgUrl}
          createdAt={filteredAnn.createdAt}
        />
        <AnnContent>{filteredAnn.notice}</AnnContent>
      </Wrapper>
    </>
  )
}

const Text = styled.div`
  padding-left: 2px;
  padding-top: 1px;
`

const ToAnnList = styled(Flexbox)`
  cursor: pointer;
  align-items: center;
`
