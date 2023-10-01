import { authInstance } from 'api/index'

export async function SecondHandClosingApi(productId) {
  try {
    const response = await authInstance.get(
      `/api/secondhand/${productId}/closing`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
