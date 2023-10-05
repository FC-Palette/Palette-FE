import { authInstance } from '../axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export async function followAdd(memberId, profileData) {
  try {
    const response = await authInstance.post(`${apiUrl}api/mypage/follow/${memberId}`, profileData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function followDelete(memberIdToDelete) {
  try {
    const response = await authInstance.delete(`${apiUrl}api/mypage/follow/${memberIdToDelete}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
