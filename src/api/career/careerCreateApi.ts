import { collectUserData } from '@/utils'
import { baseInstanceFormData } from '../axios'
import { requestCreateResponseDataProps } from '@/types'

export async function careerCreateApi(careerCreateData) {
  try {
    const formData = collectUserData(careerCreateData)

    const response = await baseInstanceFormData.post(
      '/develop/create',
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
