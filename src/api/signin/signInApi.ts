import { atom } from 'recoil'
import { authInstance } from '../axios'

const apiUrl = import.meta.env.VITE_BASE_URL

export const tokenPayloadState = atom({
  key: 'TokenPayload',
  default: { memberId: null }
})

export async function login(email, password) {
  try {
    const requestData = {
      email: email,
      password: password,
    };

    const response = await authInstance.post(`${apiUrl}api/login`, requestData)

    const responseData = response.data;

    if (responseData && responseData.response.token) {
      localStorage.setItem('Token', responseData.response.token);
    }
    return responseData;
  } catch (error) {
    throw error;
  }
}

