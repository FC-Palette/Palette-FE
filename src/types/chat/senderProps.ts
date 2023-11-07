export interface SenderProps {
  message: string
  $sender: boolean
  createdAt: string
  showCreatedTime: boolean
  showMsgActions: boolean
  toggleMsgActions: () => void
  roomId: string
  msgId: string
}

export interface RecipientProps {
  message: string
  $sender: boolean
  nickName: string
  createdAt: string
  profile: string
  showCreatedTime: boolean
  showMsgActions: boolean
  toggleMsgActions: () => void
  roomId: string
  msgId: string
  showIcon: boolean
}
