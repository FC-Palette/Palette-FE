import { baseInstanceFormData } from 'api/index'

export async function SecondHandeModifyApi(
  dto,
  file,
  productId,
  removeFileUrl
) {
  console.log(dto)
  console.log(file)
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
      `/api/secondhand/${productId}`,
      formData
    )
    return response.data
  } catch (error) {
    console.error('PURCHASEPOST_FAILURE', error)
    throw error
  }
}
