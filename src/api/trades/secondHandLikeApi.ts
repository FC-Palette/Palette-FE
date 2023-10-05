import { baseInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function SecondHandLikeApi(productId) {
  try {
    const response = await baseInstance.post(
      `/api/secondhand/${productId}/bookmark`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
