import { baseInstance } from 'api/index'

export async function SecondHandDetail(productId) {
  try {
    const response = await baseInstance.get(`/api/secondhand/${productId}`)
    return response.data
  } catch (error) {
    throw error
  }
}
