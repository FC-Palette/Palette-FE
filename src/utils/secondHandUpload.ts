import { SecondHandGlobalStateProps } from 'types/trades/index'

export const secondHandUpload = (
  SecondHandCreateData: SecondHandGlobalStateProps
): FormData => {
  const formData = new FormData()
  // string
  formData.append('title', SecondHandCreateData.title || '')
  formData.append('category', SecondHandCreateData.category || '')
  formData.append(
    'transactionStartTime',
    SecondHandCreateData.transactionStartTime || ''
  )
  formData.append(
    'transactionEndTime',
    SecondHandCreateData.transactionEndTime || ''
  )
  formData.append('description', SecondHandCreateData.description || '')

  // boolean
  formData.append('isFree', SecondHandCreateData.isFree ? 'true' : 'false')

  if (
    SecondHandCreateData.selectedDays &&
    SecondHandCreateData.selectedDays.length > 0
  ) {
    SecondHandCreateData.selectedDays.forEach((day, index) => {
      formData.append(`selectedDays[${index}]`, day)
    })
  }

  formData.append(
    'price',
    SecondHandCreateData.price ? SecondHandCreateData.price.toString() : ''
  )

  const imageBlobs = SecondHandCreateData.tradesImages
  if (imageBlobs && imageBlobs.length > 0) {
    for (let i = 0; i < imageBlobs.length; i++) {
      formData.append(`images${i}`, imageBlobs[i])
    }
  }

  return formData
}
