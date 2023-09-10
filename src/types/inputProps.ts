export interface InputProps {
  placeholder?: string
  $inputWidth?: string
  $inputHeight?: string
  $borderColor?: string
  $borderRadius?: string
  $paddingLeft?: string
  type?: string
  ph?: string
  value? : string
  children?: React.ReactNode
}

export type InputType = Pick<
  InputProps,
  | '$borderColor'
  | '$inputHeight'
  | '$inputWidth'
  | '$borderRadius'
  | '$paddingLeft'
  | 'type'
>
