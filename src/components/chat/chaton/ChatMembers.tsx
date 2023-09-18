// 우측상단 더보기 클릭시 참여인원

import {
  Background,
  BackgroundModal,
  ModalButtons,
  MembersLayer,
  MembersList,
  MembersHeader,
  MembersFooter
} from 'components/index'
import { CHATON_TEXTS } from 'constants/index'
import { modalOnState, showMembersState } from 'recoil/index'
import { useRecoilState } from 'recoil'

export const ChatMembers = () => {
  const [modalOn, setModalOn] = useRecoilState(modalOnState)
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)

  const handleShowMembers = () => {
    setShowMembers(!showMembers)
  }
  const handleExit = async () => {
    await setShowMembers(!showMembers)
    await setModalOn(!modalOn)
  }

  return (
    <>
      <BackgroundModal
        title={CHATON_TEXTS.chatRoomExit}
        content={CHATON_TEXTS.memberWarn}>
        <ModalButtons
          leftBtn={CHATON_TEXTS.cancel}
          rightBtn={CHATON_TEXTS.exit}
        />
      </BackgroundModal>
      {showMembers && (
        <>
          <Background onClick={handleShowMembers}></Background>
          <MembersLayer>
            <MembersHeader onClick={handleShowMembers} />
            <MembersList />
            <MembersFooter onClick={handleExit} />
          </MembersLayer>
        </>
      )}
    </>
  )
}
