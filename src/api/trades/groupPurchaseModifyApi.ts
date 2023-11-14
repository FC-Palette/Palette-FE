import { baseInstanceFormData } from 'api/index'

export async function GroupPurchaseModifyApi(
  dto,
  file,
  offerId,
  removeFileUrl
) {
  console.log('Request Data:', { dto, file, offerId, removeFileUrl })
  try {
    const formData = new FormData()

    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    )

    if (file && file.length > 0) {
      for (const blob of file) {
        formData.append('file', blob, `${Date.now()}.png`)
      }
    }

    if (removeFileUrl && removeFileUrl.length > 0) {
      formData.append('removeFileUrl', JSON.stringify(removeFileUrl))
    }

    const response = await baseInstanceFormData.patch(
      `/api/groupPurchase/${offerId}`,
      formData
    )

    console.log('Response Data:', response.data)
    return response.data
  } catch (error) {
    console.error('PURCHASEPOST_FAILURE', error)

    console.error('Request Failed with Error:', error)

    throw error
  }
}
