import { requestCreateResponseProps } from "."

export interface requestCreateResponseDataProps {
  status: number
  success: boolean
  response: requestCreateResponseProps[]
  error: string | null
}
