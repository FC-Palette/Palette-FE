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
import {
  secondhandcreateglobalstate,
  initialSecondHandGlobalState
} from 'recoil/index'
import { SecondHandPostApi } from 'api/trades/index'
// import { styled } from 'styled-components'

interface Params {
  [key: string]: string | undefined
}

export const SecondHandUpload = ({}) => {
  const navigate = useNavigate()
  const { stepId = '1' } = useParams<Params>()
  const [modlaOnState, setModalOnState] = useRecoilState(modalOnState)
  const initialModalText = SECONDHAND_MODAL_TEXT.create
  const [modalText, setModalText] = useState(initialModalText)
  const [secondHandGlobalState, SetSecondHandGlobalState] = useRecoilState(
    secondhandcreateglobalstate
  )

  const handleNextStep = () => {
    const nextStep = parseInt(stepId) + 1
    navigate(`/secondhandUpload/${nextStep}`)
  }

  const handleTrades = async () => {
    try {
      //이미지 데이터추가
      const formData = new FormData()

      formData.append('title', secondHandGlobalState.title || '')
      formData.append('category', secondHandGlobalState.category || '')
      formData.append(
        'transactionStartTime',
        secondHandGlobalState.transactionStartTime || ''
      )
      formData.append(
        'transactionEndTime',
        secondHandGlobalState.transactionEndTime || ''
      )
      formData.append('description', secondHandGlobalState.description || '')

      // boolean
      formData.append('isFree', secondHandGlobalState.isFree ? 'true' : 'false')

      if (
        secondHandGlobalState.selectedDays &&
        secondHandGlobalState.selectedDays.length > 0
      ) {
        secondHandGlobalState.selectedDays.forEach((day, index) => {
          formData.append(`selectedDays[${index}]`, day)
        })
      }

      formData.append(
        'price',
        secondHandGlobalState.price
          ? secondHandGlobalState.price.toString()
          : ''
      )

      const imageBlobs = secondHandGlobalState.images
      if (imageBlobs && imageBlobs.length > 0) {
        for (let i = 0; i < imageBlobs.length; i++) {
          formData.append(`images${i}`, imageBlobs[i])
        }
      }
      const response = await SecondHandPostApi(formData)

      setModalOnState(true)

      console.log('서버 응답:', response)
    } catch (error) {
      console.log('요청 오류', error)
    }
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
      SetSecondHandGlobalState(initialSecondHandGlobalState)
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

      {renderContent()}
      {renderFooter()}
    </>
  )
}
