// 우측상단 더보기 클릭시 참여인원

import {
  Background,
  BackgroundModal,
  ModalButtons,
  MembersLayer,
  MembersList,
  MembersHeader,
  MembersFooter,
  Fixer
} from 'components/index'
import { CHATON_TEXTS } from 'constants/index'
import { modalOnState, showMembersState } from 'recoil/index'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { quitChatRoom, getMembers } from 'api/index'
import { useQuery } from '@tanstack/react-query'

export const ChatMembers = ({ roomid }) => {
  const navigate = useNavigate()
  const [modalOn, setModalOn] = useRecoilState(modalOnState)
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)

  const handleShowMembers = useCallback(() => {
    setShowMembers(!showMembers)
  }, [showMembers])
  const handleExit = useCallback(async () => {
    await setShowMembers(!showMembers)
    await setModalOn(!modalOn)
  }, [showMembers, modalOn])

  return (
    <>
      <BackgroundModal
        title={CHATON_TEXTS.chatRoomExit}
        content={CHATON_TEXTS.memberWarn}>
        <ModalButtons
          leftBtn={CHATON_TEXTS.cancel}
          rightBtn={CHATON_TEXTS.exit}
          onLeftClick={() => {
            setModalOn(!modalOn)
          }}
          onRightClick={() => {
            quitChatRoom(roomid)
            navigate('/chatlist/g')
          }}
        />
      </BackgroundModal>
      {showMembers && (
        <>
          <Background onClick={handleShowMembers} />
          <MembersLayer>
            <Fixer $top="0">
              <MembersHeader
                onClick={handleShowMembers}
                roomid={roomid}
              />
              <MembersList roomid={roomid} />
              <MembersFooter
                onClick={handleExit}
                roomid={roomid}
              />
            </Fixer>
          </MembersLayer>
        </>
      )}
    </>
  )
}
