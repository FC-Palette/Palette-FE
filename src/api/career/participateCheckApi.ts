// 모임 참여 체크
import { fetchMainResponseDataProps } from '@/types'
import { authInstance } from '../axios'

export async function participateCheckApi(meetingId: string) {
  try {
    const response = await authInstance.post(
      `/develop/participate/check/${meetingId}`
    )
    return response.data
  } catch (error: any) {
    const errorResponseData: fetchMainResponseDataProps = {
      status: error.response?.status,
      success: false,
      response: [],
      error: error.response?.data.message || 'Unknown Error'
    }

    return errorResponseData
  }
}
