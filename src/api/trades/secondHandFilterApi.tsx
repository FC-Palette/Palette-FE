import { baseInstance } from 'api/axios'

export async function secondHandFilterApi(category?: string | null) {
  try {
    const response = await baseInstance.get(
      `/api/secondhand/filter?categories=,${category}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
