import { baseInstance } from 'api/axios'

export async function groupFilterApi(
  category?: string | null,
  minPrice?: number | 0,
  maxPrice?: number | 0
) {
  try {
    const response = await baseInstance.get(
      `/api/groupPurchase/filter?categories=,${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
