import { authInstance } from 'api/index'

export async function SecondHandPostApi(data: FormData) {
  try {
    const response = await authInstance.post('/api/secondhand', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    return response.data
  } catch (error) {
    console.error('SECONDHANDPOST_FAILURE', error)
    throw error
  }
}
