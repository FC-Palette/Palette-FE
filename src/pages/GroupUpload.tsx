import {
  PurchaseStepOne,
  PurchasePreview
} from 'components/trades/preview/index'
import { UploadFooter } from 'components/trades/upload/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { TRADES_MODAL_TEXT } from 'constants/trades/index'
import { useState } from 'react'
import {
  tradescreateglobalstate,
  initialTradeCreateGlobalState,
  initialImageState,
  ImageState
} from 'recoil/index'
import { GroupPurchasePostApi } from 'api/trades/index'
import {
  UseBackgroundModal,
  UseButtons
} from 'components/common/useActions/index'
import { PreviewFooter } from 'components/trades/preview/index'

// import styled from 'styled-components'
interface Params {
  [key: string]: string | undefined
}

export const GroupUpload = () => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()
  const [modal, setModal] = useState(false)
  const initialModalText = TRADES_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )
  const [imageGlobalState, setImageGlobalState] = useRecoilState(ImageState)

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/GroupUpload/${nextStep}`)
  }

  const handleTrades = async () => {
    await GroupPurchasePostApi(tradesGlobalState, imageGlobalState.file)
    setModalText(TRADES_MODAL_TEXT.create)
    setModal(true)
  }

  const handleCancel = () => {
    setModalText(TRADES_MODAL_TEXT.cancel)
    setModal(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === TRADES_MODAL_TEXT.create) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      setImageGlobalState(initialImageState)
      navigate(`/GroupPurchase`)

      setModal(false)

    } else if (modalText === TRADES_MODAL_TEXT.cancel) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      setImageGlobalState(initialImageState)
      navigate(`/GroupPurchase`)
      setModal(false)
    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === TRADES_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
    } else if (modalText === TRADES_MODAL_TEXT.cancel) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      setImageGlobalState(initialImageState)

      setModal(false)

    }
  }

  const renderContent = () => {
    switch (stepId) {
      case '1':
        return <PurchaseStepOne />
      case '2':
        return <PurchasePreview />
      default:
        return <PurchaseStepOne />
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
            Text="공동구매 제안하기"
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
      {modal && (
        <UseBackgroundModal
          modalState={modal}
          title={modalText[0]}
          content={modalText[1]}>
          <UseButtons
            onLeftClick={handleConfirmYes}
            onRightClick={handleConfirmNo}
            leftBtn={modalText[2]}
            rightBtn={modalText[3]}
          />
        </UseBackgroundModal>
      )}
    </>
  )
}
