import { SecondHandDetailCard } from 'components/trades/detail/index'
import { useParams } from 'react-router-dom'
// import { UploadFooter } from 'components/trades/upload/index'
// import { modalOnState } from 'recoil/index'
// import { useState } from 'react'
// import { BackgroundModal, ModalButtons } from 'components/index'

export const SecondHandDetail = () => {
  const { productId } = useParams()
  // const [modlaOnState, setModalOnState] = useRecoilState(modalOnState)
  // const initialModalText = SECONDHAND_MODAL_TEXT.create
  // const [modalText, setModalText] = useState(initialModalText)

  return (
    <>
      <SecondHandDetailCard productId={productId} />
    </>
  )

  // const renderFooter = () => {
  //   switch (productId) {
  //     case '1':
  //       return (
  //         <UploadFooter
  //           text="종료하기"
  //           handleNextStep={}
  //         />
  //       )
  //     case '2':
  //       return (
  //         <UploadFooter
  //           text="채팅하기"
  //           handleNextStep={}
  //         />
  //       )
  //     case '3':
  //       return (
  //         <UploadFooter
  //           text="종료된 거래입니다"
  //           handleNextStep={}
  //         />
  //       )

  //     default:
  //       return null
  //   }
  // }

  // return (
  //   <>
  //     {modlaOnState && (
  //       <BackgroundModal
  //         title={modalText[0]}
  //         content={modalText[1]}>
  //         <ModalButtons
  //           onLeftClick={handleConfirmYes}
  //           onRightClick={handleConfirmNo}
  //           leftBtn={modalText[2]}
  //           rightBtn={modalText[3]}
  //         />
  //       </BackgroundModal>
  //     )}

  //     {renderContent()}
  //     {renderFooter()}
  //   </>
  // )
}
