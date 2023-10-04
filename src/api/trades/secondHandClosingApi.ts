import { authInstance } from 'api/index'

export async function SecondHandClosingApi(productId) {
  try {
    const response = await authInstance.post(
      `/api/secondhand/${productId}/closing`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
