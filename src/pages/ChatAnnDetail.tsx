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
import { getNoticeList } from 'api/index'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

interface filteredAnnProps {
  createdAt: string
  profileImgUrl?: string
  notice: string
  nickname: string
}

export const ChatAnnDetail = () => {
  const notice = useRecoilValue(noticeState)
  const navigate = useNavigate()
  const roomId = useRecoilValue(roomIdState)
  const [filteredAnn, SetFilteredAnn] = useState<filteredAnnProps>()
  console.log(notice)
  const setShowMembers = useSetRecoilState(showMembersState)
  const backToChat = () => {
    navigate('/chat')
    setShowMembers(false)
  }
  const backToAnnList = () => {
    navigate('/chatannlist')
  }
  const {} = useQuery(
    ['notices', roomId],
    () => {
      return getNoticeList(roomId)
    },
    {
      onSuccess: data => {
        console.log(data.response)
        const noticeView = data.response.find(v => v.noticeId === notice)
        console.log(noticeView)
        SetFilteredAnn(noticeView)
      }
    }
  )

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
          src={filteredAnn?.profileImgUrl}
          createdAt={filteredAnn?.createdAt}
        />
        <AnnContent>{filteredAnn?.notice}</AnnContent>
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
