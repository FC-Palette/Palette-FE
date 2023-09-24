import { BackgroundModal, ModalButtons } from '@/components'
import {
  MeetingsCreateFooter,
  MeetingsPreviewFooter,
  StepOneCard,
  StepPreviewCard,
  StepThreeCard,
  StepTwoCard
} from '@/components/career'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { modalOnState } from '@/recoil'
import { CREATE_MODAL_TEXT } from '@/constants'
import { useState } from 'react'

import { CareerUseParamsProps } from '@/types'

export const CareerMeetingsCreate = () => {
  const [modlaOnState, setModalOnState] = useRecoilState(modalOnState)
  const initialModalText = CREATE_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)

  const navigate = useNavigate()
  const { createstepid = '1' } = useParams<CareerUseParamsProps>()

  const renderContent = () => {
    switch (createstepid) {
      case '1':
        return <StepOneCard />
      case '2':
        return <StepTwoCard />
      case '3':
        return <StepThreeCard />
      case '4':
        return <StepPreviewCard />
      default:
        return <StepOneCard />
    }
  }

  const handleNextStep = () => {
    const nextStep = parseInt(createstepid) + 1
    navigate(`/create/${nextStep}`)
  }

  const handleCreateMeeting = () => {
    setModalText(CREATE_MODAL_TEXT.create)
    setModalOnState(true)
    // 채팅창 생성하는 로직 여기 넣어야함
  }

  const handleCreateCancel = () => {
    setModalText(CREATE_MODAL_TEXT.cancel)
    setModalOnState(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === CREATE_MODAL_TEXT.create) {
      alert('상세 페이지 이동 로직')
      setModalOnState(false)
    } else if (modalText === CREATE_MODAL_TEXT.cancel) {
      alert('삭제')
      setModalOnState(false)
    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === CREATE_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
      setModalOnState(false)
    } else if (modalText === CREATE_MODAL_TEXT.cancel) {
      alert('유지')
      setModalOnState(false)
    }
  }

  const renderFooter = () => {
    switch (createstepid) {
      case '1':
      case '2':
      case '3':
        return <MeetingsCreateFooter handleNextStep={handleNextStep} />
      case '4':
        return (
          <MeetingsPreviewFooter
            handleCreateMeeting={handleCreateMeeting}
            handleCreateCancel={handleCreateCancel}
          />
        )
      default:
        return null
    }
  }

  return (
    <Wrap>
      {renderContent()}
      {renderFooter()}

      {modlaOnState && (
        <BackgroundModal
          title={modalText[0]}
          content={modalText[1]}>
          <ModalButtons
            onLeftClick={handleConfirmYes} // '네' 버튼 클릭 시
            onRightClick={handleConfirmNo} // '아니오' 버튼 클릭 시
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </BackgroundModal>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  /* height: 100%; */
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  overflow-x: hidden;
  overflow-y: scroll;
`
