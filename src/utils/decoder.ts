export const decoder = () => {
  const token = localStorage.getItem('Token') || ''
  if (!token) {
    return null; // 토큰이 없는 경우 null 반환
  }
  const tokenPayload = token?.split('.')[1];
  try {
    const decoded = JSON.parse(atob(tokenPayload));
    return decoded;
  } catch (error) {
    console.error('토큰 디코드 오류:', error);
    return null; // 디코드 오류가 발생한 경우 null 반환
  }
};
