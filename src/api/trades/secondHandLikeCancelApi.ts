import { authInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function SecondHandLikeCancelApi(productId) {
  try {
    const response = await authInstance.post(
      `/api/secondhand/${productId}/unbookmark`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
