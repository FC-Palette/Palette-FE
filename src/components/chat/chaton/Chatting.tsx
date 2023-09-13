// //소켓
// import SockJS from 'sockjs-client'
// import StompJs from 'stompjs'

// /*
// 서버와 연결할 클라이언트 객체 생성 - DONE

// → 서버와 연결할 클라이언트 Connection

// → 메세지 전송 전 Subscriber와 Publisher를 지정

// → Subscribe를 하면 해당 URL로 나에게 메세지를 보낼 수 있는 경로가 생긴다

// → Publisher를 하면 Publishe한 URL로 메세지가 이동한다
// */

// export const Chatting = props => {
//   //client 객체 생성 및 서버주소 입력
//   const sock = new SockJS('http://서버주소')
//   //stomp로 감싸기
//   const stomp = StompJs.over(sock)
//   const token = '토큰 받아와서 넣자'
//   // sessionStorage 사용시 실시간으로 변경불가 => 구현은 편하지만 한계
//   const sender = sessionStorage.getItem('nickname')
//   //Destructure, 채팅방 클릭시 roomid전달하는 구조
//   const roomId = props.match.params.roomid

//   const stompConnect = () => {
//     try {
//       stomp.debug = null
//       //[경로, 콜백함수, 토큰] => 1. 경로에서 roomId를 통해 유동적으로 진입한다.
//       //  2. 콜백함수에서 파싱 및 데이터 상태처리
//       //  3. 토큰값을 요구한다.
//       stomp.connect(token, () => {
//         stomp.subscribe(
//           `서버주소`,
//           data => {
//             const newMessage = JSON.parse(data.body)
//           },
//           token
//         )
//       })
//     } catch (err) {}
//   }

//   //웹소켓 connect-subscribe 부분

//   const stompDisConnect = () => {
//     try {
//       stomp.debug = null
//       stomp.disconnect(() => {
//         stomp.unsubscribe('sub-0')
//       }, token)
//     } catch (err) {}
//   }
//   //웹소켓 disconnect-unsubscribe 부분
//   // 웹소켓을 disconnect을 따로 해주지 않으면 계속 연결되어 있어서 사용하지 않을때는 꼭 연결을 끊어주어야한다.

//   const SendMessage = () => {
//     stomp.debug = null
//     const data = {
//       type: 'TALK',
//       roomId: roomId,
//       sender: sender,
//       message: message,
//       createdAt: now
//     }
//     //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
//     stomp.send('/pub/chat/message', token, JSON.stringify(data))
//   }
//   //웹소켓 데이터 전송 부분
//   return <></>
// }
