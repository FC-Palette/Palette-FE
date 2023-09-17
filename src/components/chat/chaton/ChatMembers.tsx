// 우측상단 더보기 클릭시 참여인원

import { useRecoilState } from 'recoil'
import { showMembersState } from 'recoil/index'
import {
  Background,
  BackgroundModal,
  ModalButtons,
  MembersLayer
} from 'components/index'
import { CHATON_TEXTS } from 'constants/index'

export const ChatMembers = () => {
  const [showMembers, setShowMembers] = useRecoilState(showMembersState)

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
        <Background>
          <MembersLayer></MembersLayer>
        </Background>
      )}
    </>
  )
}
