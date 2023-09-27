import axios from 'axios';

export async function getMyPage() {
  try {
    const apiUrl = '/mypage'; 

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found. Please log in.');
    }

    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function getOtherUserPage(memberId) {
  try {
    const apiUrl = `/api/mypage/${memberId}`;

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      throw new Error('Access token not found. Please log in.');
    }

    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
