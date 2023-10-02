import { fetchMainResponseDataProps } from '@/types'
import { authInstance } from '../axios'

export async function requestMeetingCloseApi(meetingId: string) {
  try {
    const response = await authInstance.post(`/develop/close/${meetingId}`)
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
