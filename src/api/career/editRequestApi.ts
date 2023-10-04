import { baseInstanceFormData } from '../axios'
import { requestCreateResponseDataProps } from '@/types'

export async function editRequestApi(dto, file, meetingId) {
  try {
    const formData = new FormData()

    formData.append(
      'dto',
      new Blob([JSON.stringify(dto)], { type: 'application/json' })
    )

    for (const blob of file) {
      formData.append('file', blob, `${Date.now()}.png`)
    }

    const response = await baseInstanceFormData.post(
      `/develop/update/${meetingId}`,
      formData
    )

    return {
      status: response.status,
      success: true,
      response: response.data,
      error: null
    }
  } catch (error: any) {
    const errorResponseData: requestCreateResponseDataProps = {
      status: error.response?.status,
      success: false,
      response: [],
      error: error.response?.data.message || 'Unknown Error'
    }

    return errorResponseData
  }
}
