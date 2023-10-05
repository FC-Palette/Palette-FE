import {
  SecondHandStepOne,
  SecondHandPre
} from 'components/trades/preview/index'
import {
  UseBackgroundModal,
  UseButtons
} from 'components/common/useActions/index'
import { UploadFooter } from 'components/trades/upload/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { SECONDHAND_MODAL_TEXT } from 'constants/trades/index'
import { useState } from 'react'
import { PreviewFooter } from 'components/trades/preview/index'
import {
  secondhandcreateglobalstate,
  initialSecondHandGlobalState,
  initialImageState,
  ImageState
} from 'recoil/index'
import { SecondHandPostApi } from 'api/trades/index'

// import { styled } from 'styled-components'

interface Params {
  [key: string]: string | undefined
}

export const SecondHandUpload = ({}) => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()
  const [modal3, setModal3] = useState(false)
  const initialModalText = SECONDHAND_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)
  const [secondHandGlobalState, setSecondHandGlobalState] = useRecoilState(
    secondhandcreateglobalstate
  )
  const [imageGlobalState, setImageGlobalState] = useRecoilState(ImageState)

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/secondhandUpload/${nextStep}`)
  }

  const handleTrades = async () => {
    await SecondHandPostApi(secondHandGlobalState, imageGlobalState.file)
    setModalText(SECONDHAND_MODAL_TEXT.create)
    setModal3(true)
  }

  const handleCancel = () => {
    setModalText(SECONDHAND_MODAL_TEXT.cancel)
    setModal3(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === SECONDHAND_MODAL_TEXT.create) {
      setSecondHandGlobalState(initialSecondHandGlobalState)
      setImageGlobalState(initialImageState)

      setModal3(false)
      navigate(`/secondHand`)
    } else if (modalText === SECONDHAND_MODAL_TEXT.cancel) {
      setSecondHandGlobalState(initialSecondHandGlobalState)
      setImageGlobalState(initialImageState)
      setModal3(false)
      navigate(`/secondHand`)

    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === SECONDHAND_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
    } else if (modalText === SECONDHAND_MODAL_TEXT.cancel) {
      setModal3(false)
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
        return (
          <UploadFooter
            text="미리보기"
            handleNextStep={handleNextStep}
          />
        )
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
      {modal3 && (
        <UseBackgroundModal
          title={modalText[0]}
          content={modalText[1]}
          modalState={modal3}>
          <UseButtons
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </UseBackgroundModal>
      )}

      {renderContent()}
      {renderFooter()}
    </>
  )
}
