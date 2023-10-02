import { fetchMainResponseDataProps } from '@/types'
import { authInstance, baseInstance } from '../axios'

export async function fetchMainApi(
  isClose: number,
  filter?: string,
  onOff?: string | null,
  type?: string | null,
  job?: string[] | null,
  position?: string[] | null,
  sex?: string | null
) {
  try {
    const jobQueryParam = job ? job.join(',') : ''
    const positionQueryParam = position ? position.join(',') : ''

    const response = await baseInstance.get(
      `/develop/filter?isClose=${isClose}&filter=${filter}&onOff=${
        onOff || ''
      }&type=${
        type || ''
      }&job=${jobQueryParam}&position=${positionQueryParam}&sex=${sex || ''}`
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
