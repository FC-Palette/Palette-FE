import { authInstance } from '../axios';

export async function getMyPage(memberId) {

  const apiUrl = import.meta.env.VITE_BASE_URL; 

  try {
    const response = await authInstance.get(`${apiUrl}api/mypage/${memberId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
}

