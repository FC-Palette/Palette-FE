import { baseInstance } from 'api/index'

export async function GroupPurchaseDetail(offerId) {
  try {
    const response = await baseInstance.get(`/api/groupPurchase/${offerId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
