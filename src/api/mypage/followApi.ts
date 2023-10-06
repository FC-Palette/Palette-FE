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

export async function MyPagefollowAdd(memberId, profileData) {
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

export async function checkFollowed(memberId) {
  try {
    const response = await authInstance.get(`${apiUrl}api/mypage/followed/${memberId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function checkFollowing(memberId) {
  try {
    const response = await authInstance.get(`${apiUrl}api/mypage/following/${memberId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

