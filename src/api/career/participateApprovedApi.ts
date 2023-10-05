// 모임 참여 체크
import { fetchMainResponseDataProps } from '@/types'
import { authInstance } from '../axios'

export async function participateApprovedApi(
  meetingId: string,
  submitPr: any
) {
  try {
    const response = await authInstance.post(
      `/develop/participate/${meetingId}`,
      submitPr
    )
    return response
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
