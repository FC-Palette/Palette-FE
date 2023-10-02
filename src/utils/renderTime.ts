export const renderTime = (curMsg, nextMsg) => {
  if (!nextMsg) return true //다음 메시지가 없을 경우
  if (curMsg.memberId !== nextMsg.memberId) return true // 다음 메시지가 내 메시지가 아닌 경우
  if (curMsg.createdAt !== nextMsg.createdAt) return true // 현재 메시지와 다음 메시지의 시간이 다른 경우
  return false
}
