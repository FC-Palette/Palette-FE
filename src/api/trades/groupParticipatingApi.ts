import { authInstance } from 'api/index'

export async function GroupParticipatingApi(offerId) {
  try {
    const response = await authInstance.post(
      `/api/groupPurchase/${offerId}/participate`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
