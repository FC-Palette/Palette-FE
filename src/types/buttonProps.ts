export interface ButtonProps {
  $bgColor?: string
  color?: string
  $btnWidth?: string
  $btnHeight?: string
  $fontSize?: string
  $borderColor?: string
  $borderRadius?: string
  disabled? : boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}

export type StyleType = Pick<
  ButtonProps,
  | 'color'
  | '$bgColor'
  | '$btnWidth'
  | '$btnHeight'
  | '$borderColor'
  | '$borderRadius'
  | '$fontSize'
>
export type SizeType = Pick<
  ButtonProps,
  '$btnWidth' | '$btnHeight' | '$fontSize'
>
export type BorderType = Pick<ButtonProps, '$borderColor' | '$borderRadius'>
