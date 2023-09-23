import {
  SecondHandStepOne,
  SecondHandPre
} from 'components/trades/preview/index'
import { UploadFooter } from 'components/trades/upload/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'
import { SECONDHAND_MODAL_TEXT } from 'constants/trades/index'
import { useState } from 'react'
import { BackgroundModal, ModalButtons } from 'components/index'
import { PreviewFooter } from 'components/trades/preview/index'

interface Params {
  [key: string]: string | undefined
}

export const SecondHandUpload = ({}) => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()
  const [modlaOnState, setModalOnState] = useRecoilState(modalOnState)
  const initialModalText = SECONDHAND_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/secondhandUpload/${nextStep}`)
  }

  const handleTrades = () => {
    setModalText(SECONDHAND_MODAL_TEXT.create)
    setModalOnState(true)
    // 채팅창 생성하는 로직 여기 넣어야함
  }

  const handleCancel = () => {
    setModalText(SECONDHAND_MODAL_TEXT.cancel)
    setModalOnState(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === SECONDHAND_MODAL_TEXT.create) {
      setModalOnState(false)
    } else if (modalText === SECONDHAND_MODAL_TEXT.cancel) {
      navigate(`/secondHand`)
      setModalOnState(false)
    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === SECONDHAND_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
    } else if (modalText === SECONDHAND_MODAL_TEXT.cancel) {
      setModalOnState(false)
    }
  }

  const renderContent = () => {
    switch (stepId) {
      case '1':
        return <SecondHandStepOne />
      case '2':
        return <SecondHandPre />
      default:
        return <SecondHandStepOne />
    }
  }

  const renderFooter = () => {
    switch (stepId) {
      case '1':
        return <UploadFooter handleNextStep={handleNextStep} />
      case '2':
        return (
          <PreviewFooter
            Text="중고거래 제안하기"
            handleTrades={handleTrades}
            handleCancel={handleCancel}
          />
        )

      default:
        return null
    }
  }

  return (
    <>
      {renderContent()}
      {renderFooter()}
      {modlaOnState && (
        <BackgroundModal
          title={modalText[0]}
          content={modalText[1]}>
          <ModalButtons
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </BackgroundModal>
      )}
    </>
  )
}
