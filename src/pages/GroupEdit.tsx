import { PurchasePreview } from 'components/trades/preview/index'
import { EditPurchase } from 'components/trades/edit/index'
import { UploadFooter } from 'components/trades/upload/index'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { MODIFY_MODAL_TEXT } from 'constants/trades/index'
import { useState } from 'react'
import {
  tradescreateglobalstate,
  initialTradeCreateGlobalState,
  initialImageState,
  ImageState
} from 'recoil/index'
import { GroupPurchaseModifyApi } from 'api/trades/index'
import {
  UseBackgroundModal,
  UseButtons
} from 'components/common/useActions/index'
import { PreviewFooter } from 'components/trades/preview/index'

interface Params {
  [key: string]: string | undefined
}

export const GroupEdit = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const offerId = location.state.offerId
  const { stepId = '1' } = useParams<Params>()
  const [modal, setModal] = useState(false)
  const initialModalText = MODIFY_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )
  const [imageGlobalState, setImageGlobalState] = useRecoilState(ImageState)

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/GroupEdit/${nextStep}`, {
      state: { offerId }
    })
  }

  const handleTrades = async () => {
    await GroupPurchaseModifyApi(
      tradesGlobalState,
      imageGlobalState.file,
      offerId
    )
    setModalText(MODIFY_MODAL_TEXT.create)
    setModal(true)
  }

  const handleCancel = () => {
    setModalText(MODIFY_MODAL_TEXT.cancel)
    setModal(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === MODIFY_MODAL_TEXT.create) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      setImageGlobalState(initialImageState)
      navigate(`/GroupPurchase`)
      setModal(false)
    } else if (modalText === MODIFY_MODAL_TEXT.cancel) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      setImageGlobalState(initialImageState)
      navigate(`/GroupPurchase`)
      setModal(false)
    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === MODIFY_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
    } else if (modalText === MODIFY_MODAL_TEXT.cancel) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      setImageGlobalState(initialImageState)
      setModal(false)
    }
  }

  const renderContent = () => {
    switch (stepId) {
      case '1':
        return <EditPurchase />
      case '2':
        return <PurchasePreview />
      default:
        return <EditPurchase />
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
            Text="공동구매 수정하기"
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
