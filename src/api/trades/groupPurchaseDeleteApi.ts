import { authInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function GroupPurchaseDeleteApi(offerId) {
  try {
    const response = await authInstance.delete(`/api/groupPurchase/${offerId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
