import { fetchMainResponseDataProps } from '@/types'

import { baseInstance } from '../axios'

export async function requestMeetingLikeApi(meetingId: string) {
  try {
    const response = await baseInstance.post(`/develop/like/${meetingId}`)
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
