import { theme } from '@/styles'
import { Button } from 'components/index'

//한개짜리 꽉찬 모달버튼입니다.
export const ModalButton = ({ children }) => {
  return (
    <Button
      $bgColor={theme.main.blue0}
      $btnWidth="263px"
      $btnHeight="48px"
      $fontSize="16px">
      {children}
    </Button>
  )
}
