interface User {
  nickname: string
  bio: string
  image: string | null
}

export interface FetchMemberResponseProps {
  status: number
  success: boolean
  response: Array<User>
  error: null | string
}
