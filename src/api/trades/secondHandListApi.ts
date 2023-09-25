import axios, { AxiosResponse } from 'axios'

// 성공 응답 데이터 타입
interface SecondHandResProps {
  id: number
  title: string
  category: string
  price: number
  thumbnailUrl: string
  hits: number
  bookmarkCount?: number
}

// 오류 응답 데이터 타입
interface ErrorResponseData {
  message: string
}

// 응답 데이터 타입
interface SecondHandListResProps {
  status: number
  success: boolean
  response: SecondHandResProps[] | null
  error: ErrorResponseData | null
}

export default async function GroupPurchaseListApi(): Promise<SecondHandListResProps> {
  try {
    const response: AxiosResponse<SecondHandResProps[]> = await axios.get(
      'API_ENDPOINT_URL_HERE' // API 요청 URL을 여기에 추가
    )

    // 서버 응답에서 데이터를 추출
    const data = response.data

    // 성공적인 응답
    const responseData: SecondHandListResProps = {
      status: 200,
      success: true,
      response: data,
      error: null
    }

    console.log('Successful Response Data:', responseData) // 성공적인 응답

    return responseData
  } catch (error: any) {
    // 오류 처리
    if (error.response) {
      // 서버에서 오류 응답을 받은 경우
      const errorResponseData: SecondHandListResProps = {
        status: error.response.status,
        success: false,
        response: null,
        error: { message: error.response.data.message }
      }

      console.log('Error Response Data:', errorResponseData) // 오류 응답

      return errorResponseData
    } else {
      // 네트워크 오류 또는 기타 오류 처리
      const errorMessage = error.message || 'Network Error'
      const networkErrorResponseData: SecondHandListResProps = {
        status: 500,
        success: false,
        response: null,
        error: { message: errorMessage }
      }

      console.log('Network Error Response Data:', networkErrorResponseData) // 네트워크 오류 응답

      return networkErrorResponseData
    }
  }
}
