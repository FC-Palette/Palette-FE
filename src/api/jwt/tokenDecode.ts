// import jwt from 'jsonwebtoken';

// export const tokenDecode = (): {
//   header: any;
//   payload: any;
// } | null => {
//   const token = localStorage.getItem('Token');
//   if (token === null) {
//     return null; // 토큰이 없을 경우 null을 반환
//   }
//   try {
//     const decoded = jwt.decode(token, { complete: true });
//     if (decoded) {
//       return {
//         header: decoded.header,
//         payload: decoded.payload,
//       };
//     } else {
//       return { header: null, payload: null }; // 또는 다른 기본값으로 초기화
//     }
//   } catch (error) {
//     console.error('토큰 해독 실패:', error);
//     return null; // 해독 실패 시 null을 반환
//   }
// }
