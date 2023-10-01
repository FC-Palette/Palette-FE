import { TradeCreateGlobalStateProps } from 'types/trades/index'

export const purchaseUploadData = (
  PurchaseCreateData: TradeCreateGlobalStateProps
): FormData => {
  const formData = new FormData()
  // string
  formData.append('title', PurchaseCreateData.title || '')
  formData.append('category', PurchaseCreateData.category || '')
  formData.append('startDate', PurchaseCreateData.startDay || '')
  formData.append('endDate', PurchaseCreateData.endDay || '')
  formData.append('description', PurchaseCreateData.description || '')
  formData.append('shopUrl', PurchaseCreateData.shopUrl || '')
  formData.append('closingType', PurchaseCreateData.closingType || '')
  formData.append('bank', PurchaseCreateData.bank || '')
  formData.append('accountNumber', PurchaseCreateData.accountNumber || '')
  formData.append('accountOwner', PurchaseCreateData.accountOwner || '')

  // number
  formData.append(
    'headCount',
    PurchaseCreateData.headCount ? PurchaseCreateData.headCount.toString() : ''
  )
  formData.append(
    'price',
    PurchaseCreateData.price ? PurchaseCreateData.price.toString() : ''
  )

  const imageBlobs = PurchaseCreateData.images
  if (imageBlobs && imageBlobs.length > 0) {
    for (let i = 0; i < imageBlobs.length; i++) {
      formData.append(`images${i}`, imageBlobs[i])
    }
  }

  return formData
}
