import { participateCheckApi } from '@/api'
import { Button, UseBackgroundModal, UseButtons } from '@/components'
import { CREATE_MODAL_TEXT } from '@/constants'
import { fetchDetailGlobalState } from '@/recoil'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const GetDetailFooterAndButtonGuest = ({ loggedInUser }) => {
  const navigate = useNavigate()
  const { detailid } = useParams()
  if (!detailid) {
    return
  }

  const [useModal, setUseModal] = useState(false)
  const modalText = CREATE_MODAL_TEXT.condition_not_met
  const meetingRes = useRecoilValue(fetchDetailGlobalState)
  const { msg, acceptType } = meetingRes
  const isUserJoined = msg === '참여하고 있지않은 모임입니다.' ? false : true

  // 우선 pr받고 채팅 로직 후 적용
  // const participantId = decoder().memberId
  // const [chatId, setChatId] = useRecoilState(chatAtom)

  // useEffect(() => {
  //   if (detailid && !isUserJoined) {
  //     setChatId({
  //       type: 'PERSONAL',
  //       contentId: detailid,
  //       participant: participantId
  //     })
  //   }
  // }, [detailid, isUserJoined])

  if (!loggedInUser) {
    return
  }

  const moveToJoinMeetingNot = () => {
    navigate('/joinmeeting/not', {
      state: { detailid }
    })
  }

  const moveToJoinMeetingApprove = () => {
    navigate('/joinmeeting/approved/1', {
      state: { detailid }
    })
  }

  const checkCondition = async () => {
    if (detailid && !isUserJoined) {
      const checkRes = await participateCheckApi(detailid)
      if (
        acceptType === '선착순' &&
        checkRes.response === '가입요건이 맞지 않아요'
      ) {
        setUseModal(!useModal)
      } else if (
        acceptType === '선착순' &&
        checkRes.response === '가입요건이 충족되었습니다.'
      ) {
        moveToJoinMeetingNot()
      } else if (
        acceptType === '승인제' &&
        checkRes.response === '가입요건이 충족되었습니다.'
      ) {
        moveToJoinMeetingApprove()
      } else if (
        acceptType === '승인제' &&
        checkRes.response === '가입요건이 맞지 않아요'
      ) {
        setUseModal(!useModal)
      }
    }

    if (detailid && isUserJoined) {
      alert('위에서 받은 chatId보내면 될듯?')
    }
  }

  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={checkCondition}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px">
            {isUserJoined ? '채팅하기' : '참여하기'}
          </Button>
        </BtnWrap>
      </Wrapper>

      {isUserJoined && (
        <IsUserNotJoined>이미 참여중인 모임입니다.</IsUserNotJoined>
      )}

      {useModal && (
        <UseBackgroundModal
          modalState={useModal}
          title={modalText[0]}
          content={modalText[1]}>
          <UseButtons
            modalState={useModal}
            onLeftClick={() => setUseModal(false)}
            onRightClick={() => alert('메세지 보내기 로직 필요')}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </UseBackgroundModal>
      )}
    </>
  )
}

const IsUserNotJoined = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 80px;
  width: 100%;
  height: 32px;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.greyScale.grey7};
  opacity: 0.9;
  color: ${props => props.theme.main.white};
`

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  min-height: 80px;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.main.white};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.2);
`

const BtnWrap = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  width: 100%;
  margin: 0 24px;
`
