import axios, { AxiosResponse } from 'axios'

// 성공 응답 데이터 타입
export interface GroupPurchaseResProps {
  id: number
  title: string
  category: string
  price: number
  thumbnailUrl: string
  hits: number
  bookmarkCount?: number
}

// 오류 응답 데이터 타입
export interface ErrorResponseData {
  message: string
}

// 응답 데이터 타입
export interface GroupPurchaseListResProps {
  status: number
  success: boolean
  response: GroupPurchaseResProps[]
  error: ErrorResponseData | null
}

export async function GroupPurchaseListApi(): Promise<GroupPurchaseListResProps> {
  try {
    const response: AxiosResponse<GroupPurchaseResProps[]> = await axios.get(
      'API_URL' // 실제 API 요청 URL을 여기에 추가
    )

    // 서버 응답에서 데이터를 추출
    const data = response.data

    // 성공적인 응답
    const responseData: GroupPurchaseListResProps = {
      status: 200,
      success: true,
      response: data,
      error: null
    }

    console.log('Successful Response Data:', responseData) // 성공적인 응답

    return responseData
  } catch (error: any) {
    // 오류 처리
    if (axios.isAxiosError(error)) {
      // 서버에서 오류 응답을 받은 경우
      const errorResponseData: GroupPurchaseListResProps = {
        status: error.response?.status || 500,
        success: false,
        response: [],
        error: { message: error.response?.data.message || 'Unknown Error' }
      }

      console.log('Error Response Data:', errorResponseData) // 오류 응답

      return errorResponseData
    } else {
      // 네트워크 오류 또는 기타 오류 처리
      const errorMessage = error.message || 'Network Error'
      const networkErrorResponseData: GroupPurchaseListResProps = {
        status: 500,
        success: false,
        response: [],
        error: { message: errorMessage }
      }

      console.log('Network Error Response Data:', networkErrorResponseData) // 네트워크 오류 응답

      return networkErrorResponseData
    }
  }
}
