import { authInstance } from 'api/index'

export async function GroupPurchasePostApi(data: FormData) {
  try {
    const response = await authInstance.post('/api/groupPurchase', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return response.data
  } catch (error) {
    console.error('PURCHASEPOST_FAILURE', error)
    throw error
  }
}
