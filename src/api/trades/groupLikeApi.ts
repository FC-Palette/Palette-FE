import { baseInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function GroupLikeApi(offerId) {
  try {
    const response = await baseInstance.post(
      `/api/groupPurchase/${offerId}/bookmark`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
