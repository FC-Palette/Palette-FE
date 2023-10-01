import { baseInstance } from 'api/index'

// 성공 응답 데이터 타입

export async function SecondHandListApi() {
  try {
    const response = await baseInstance.get('/api/secondhand')
    return response.data
  } catch (error) {
    throw error
  }
}
