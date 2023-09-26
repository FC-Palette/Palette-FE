export interface HeaderProps {
  leftIcon?: React.ReactNode
  centerText: React.ReactNode
  chatCount?: number
  children?: React.ReactNode
  $borderRadius?: string
  cancelClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export type HeaderType = Pick<HeaderProps, '$borderRadius'>
