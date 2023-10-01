import { authInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function GroupPurchaseClosingApi(offerId) {
  try {
    const response = await authInstance.post(
      `/api/groupPurchase/${offerId}/closing`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
