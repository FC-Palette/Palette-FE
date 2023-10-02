import { authInstance } from 'api/index'

const [CHAT] = [import.meta.env.VITE_BASE_CHAT_PATH]

//1. 채팅 메시지 내역, useQuery 콜백함수
export const getChatLog = async (roomId: string) => {
  const res = await authInstance.get(`${CHAT}/room/history?${roomId}`)
  return res.data
}

//2. 공지 리스트, useQuery를 통해 관리(ChatAnnList)
export const getNoticeList = async (roomId: string) => {
  const res = await authInstance.get(`${CHAT}/room/history?${roomId}`)
  return res.data
}

//3. 채팅방 상단 계좌정보, useQuery를 통해 관리(AccountInfo)
export const getAccount = async (contentId: string) => {
  const res = await authInstance.get(`${CHAT}/notice/account?${contentId}`)
  return res.data
}

//4. 채팅방 나가기, ModalButtons에 우측버튼
export const quitChatRoom = async (roomId: string) => {
  const res = await authInstance.delete(`${CHAT}/exit?${roomId}`)
  return res.status
}

//5. 채팅방 입장시 필요? + MembersList useQuery관리 => ChatAnnList에서도 필요, Recoil로 관리
export const getMembers = async () => {
  const res = await authInstance.get(`${CHAT}/member`)
  return res.data
}

//6. 채팅방 리스트, ChatRooms, useQuery관리
export const getChatList = async (roomtype: string) => {
  const res = await authInstance.get(`${CHAT}/list?type=${roomtype}`)
  return res.data
}

//7. 공지 등록, MsgActions 핸들러
export const createNotice = async (roomId: string, messageId: string) => {
  const res = await authInstance.post(
    `${CHAT}/notice`,
    {
      roomId: roomId,
      messageId: messageId
    },
    { withCredentials: true }
  )
  return res.data
}

//8. 채팅방 상단 현재 공지, useQuery관리 - ChatAnn
export const getNotice = async (roomId: string) => {
  const res = await authInstance.get(`${CHAT}/room?detail=${roomId}`)
  return res.data
}

// //9. 파일, 이미지 전송
// export const sendFile = async (type: string, messageId: string) => {
//   const res = await authInstance.post(`${CHAT}/notice`, {
//     roomId: roomId,
//     messageId: messageId
//   })
//   return res.data
// }
/*
{
	"status": 201, 
	"success": true,
	"response": 
		{
	    "image" : "https://",
			"type" : "IMAGE, FILE",
			"createdAt" : 23.09.18
		}
}
 */
