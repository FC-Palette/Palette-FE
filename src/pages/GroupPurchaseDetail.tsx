import { PurchaseDetailCard } from 'components/trades/detail/index'
import { useParams } from 'react-router-dom'
// import { UploadFooter } from 'components/trades/upload/index'
// import { modalOnState } from 'recoil/index'
// import { useState } from 'react'
// import { BackgroundModal, ModalButtons } from 'components/index'

export const GroupPurchaseDetail = () => {
  const { offerId } = useParams()

  return (
    <>
      <PurchaseDetailCard offerId={offerId} />
    </>
  )
}
