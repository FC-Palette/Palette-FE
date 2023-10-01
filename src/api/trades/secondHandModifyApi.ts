import { authInstance } from 'api/index'

export async function SecondHandModifyApi(productId) {
  try {
    const response = await authInstance.patch(`/api/secondhand/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
