import {
  PurchaseStepOne,
  PurchasePreview
} from 'components/trades/preview/index'
import { UploadFooter } from 'components/trades/upload/index'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { modalOnState } from 'recoil/index'
import { TRADES_MODAL_TEXT } from 'constants/trades/index'
import { useState } from 'react'
import {
  tradescreateglobalstate,
  initialTradeCreateGlobalState
} from 'recoil/index'
import { GroupPurchasePostApi } from 'api/trades/index'
import { BackgroundModal, ModalButtons } from 'components/index'
import { PreviewFooter } from 'components/trades/preview/index'
// import styled from 'styled-components'
interface Params {
  [key: string]: string | undefined
}

export const GroupUpload = () => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()
  const [modlaOnState, setModalOnState] = useRecoilState(modalOnState)
  const initialModalText = TRADES_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/GroupUpload/${nextStep}`)
  }

  const handleTrades = async () => {
    try {
      //이미지 데이터추가
      const formData = new FormData()

      if (tradesGlobalState.images.length > 0) {
        tradesGlobalState.images.forEach((imageBlob, index) => {
          formData.append(`images[${index}]`, imageBlob)
        })
      }

      // DTO 데이터 추가
      formData.append('title', tradesGlobalState.title)
      formData.append('description', tradesGlobalState.description)
      formData.append('price', tradesGlobalState.price.toString())
      formData.append('category', tradesGlobalState.category)
      formData.append('startDay', tradesGlobalState.startDay)
      formData.append('endDay', tradesGlobalState.endDay)
      formData.append('timeRemaining', tradesGlobalState.timeRemaining)
      formData.append('headCount', tradesGlobalState.headCount.toString())
      formData.append('closingType', tradesGlobalState.closingType)
      formData.append('accountOwner', tradesGlobalState.accountOwner)
      formData.append('accountNumber', tradesGlobalState.accountNumber)
      formData.append('shopUrl', tradesGlobalState.shopUrl)
      formData.append('bank', tradesGlobalState.bank)

      const response = await GroupPurchasePostApi(formData)
      setModalText(TRADES_MODAL_TEXT.create)
      setModalOnState(true)

      console.log('서버 응답:', response)
    } catch (error) {
      console.log('요청 오류', error)
    }
  }

  const handleCancel = () => {
    setModalText(TRADES_MODAL_TEXT.cancel)
    setModalOnState(true)
  }

  // 모달 왼쪽 버튼 클릭 시 실행
  const handleConfirmYes = () => {
    if (modalText === TRADES_MODAL_TEXT.create) {
      setModalOnState(false)
    } else if (modalText === TRADES_MODAL_TEXT.cancel) {
      setTradesGlobalState(initialTradeCreateGlobalState)
      navigate(`/GroupPurchase`)
      setModalOnState(false)
    }
  }

  // 모달 오른쪽 버튼 클릭 시 실행
  const handleConfirmNo = () => {
    if (modalText === TRADES_MODAL_TEXT.create) {
      alert('채팅 페이지 이동 로직')
    } else if (modalText === TRADES_MODAL_TEXT.cancel) {
      setModalOnState(false)
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
