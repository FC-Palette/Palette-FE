import { authInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function GroupPurchaseModifyApi(offerId) {
  try {
    const response = await authInstance.patch(`/api/groupPurchase/${offerId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
