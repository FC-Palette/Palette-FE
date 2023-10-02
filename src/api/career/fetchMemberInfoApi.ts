import { FetchMemberResponseProps } from '@/types'
import { baseInstance } from '../axios'

export async function fetchMemberInfoApi(meetingId: string) {
  try {
    const response = await baseInstance.get(`/develop/${meetingId}/member`)
    return response.data
  } catch (error: any) {
    const errorResponseData: FetchMemberResponseProps = {
      status: error.response?.status,
      success: false,
      response: [],
      error: error.response?.data.message || 'Unknown Error'
    }

    return errorResponseData
  }
}
