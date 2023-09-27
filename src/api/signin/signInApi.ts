import axios from 'axios';

export async function login(email, password) {
  try {
    const apiUrl = 'http://43.201.146.20/api/login'; 

    const requestData = {
      email: email,
      password: password,
    };

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = response.data;

    if (responseData && responseData.token) {
      localStorage.setItem('accessToken', responseData.token);
    }

    return responseData;
  } catch (error) {
    throw error;
  }
}
