import { participateCheckApi } from '@/api'
import { Button, UseBackgroundModal, UseButtons } from '@/components'
import { CREATE_MODAL_TEXT, meetingConditionText } from '@/constants'
import { fetchDetailGlobalState, fetchDetailMemberState } from '@/recoil'
import { theme } from '@/styles'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

export const GetDetailFooterAndButtonGuest = ({ loggedInUser }) => {
  const navigate = useNavigate()
  const { detailid } = useParams()
  const memberAtom = useRecoilValue(fetchDetailMemberState)
  const meetingRes = useRecoilValue(fetchDetailGlobalState)
  const [useModal, setUseModal] = useState(false)
  const modalText = CREATE_MODAL_TEXT.condition_not_met
  const { msg, acceptType, headCount } = meetingRes
  const isUserJoined = msg === '참여하고 있지않은 모임입니다.' ? false : true
  const recruitedPersonnel = memberAtom.length
  const remainingSeats: number = headCount - +recruitedPersonnel

  if (!detailid) {
    return null
  }

  if (!detailid) {
    return
  }

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
    if (remainingSeats === 0) {
      return
    }
    if (detailid && !isUserJoined) {
      const checkRes = await participateCheckApi(detailid)
      if (
        acceptType === '선착순' &&
        checkRes.response === meetingConditionText[0]
      ) {
        setUseModal(!useModal)
        console.log(checkRes)
      } else if (
        acceptType === '선착순' &&
        checkRes.response === meetingConditionText[1]
      ) {
        moveToJoinMeetingNot()
        console.log(checkRes)
      } else if (
        acceptType === '승인제' &&
        checkRes.response === meetingConditionText[1]
      ) {
        moveToJoinMeetingApprove()
        console.log(checkRes)
      } else if (
        acceptType === '승인제' &&
        checkRes.response === meetingConditionText[0]
      ) {
        setUseModal(!useModal)
        console.log(checkRes)
      }
    }

    if (detailid && isUserJoined) {
      navigate('/chatlist/g')
    }
  }

  const renderBtnText = () => {
    if (remainingSeats === 0) {
      return '마감된 모집입니다.'
    } else if (isUserJoined) {
      return '채팅하기'
    } else {
      return '참여하기'
    }
  }

  const bgColor = remainingSeats ? '' : theme.greyScale.grey2
  const borderColor = remainingSeats ? '' : theme.greyScale.grey2
  const color = remainingSeats ? '' : theme.greyScale.grey3

  return (
    <>
      <Wrapper>
        <BtnWrap>
          <Button
            onClick={checkCondition}
            $btnWidth="100%"
            $btnHeight="60px"
            $fontSize="20px"
            $borderRadius="8px"
            $bgColor={bgColor}
            $borderColor={borderColor}
            color={color}>
            {renderBtnText()}
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
            onRightClick={() => navigate('/chatlist/p')}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </UseBackgroundModal>
      )}
    </>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  max-width: 430px;
  min-height: 80px;
  z-index: 100;
  bottom: 0%;
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
