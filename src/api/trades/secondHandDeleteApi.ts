import { authInstance } from 'api/index'

export async function SecondHandDeleteApi(productId) {
  try {
    const response = await authInstance.delete(`/api/secondhand/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
