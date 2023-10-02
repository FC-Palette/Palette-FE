import { fetchMainResponseProps } from '.'

export interface fetchMainResponseDataProps {
  status: number
  success: boolean
  response: fetchMainResponseProps[] | any
  error: string | null
}
