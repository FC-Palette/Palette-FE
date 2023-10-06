import { authInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function GroupLikeCancelApi(offerId) {
  try {
    const response = await authInstance.post(
      `/api/groupPurchase/${offerId}/unbookmark`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
