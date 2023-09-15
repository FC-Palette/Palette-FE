export interface InputProps {
  placeholder?: string;
  $inputWidth?: string;
  $inputHeight?: string;
  $borderColor?: string;
  $borderRadius?: string;
  $paddingLeft?: string;
  type?: string;
  ph?: string;
  value?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export type InputType = Pick<
  InputProps,
  | '$borderColor'
  | '$inputHeight'
  | '$inputWidth'
  | '$borderRadius'
  | '$paddingLeft'
  | 'type'
  | 'onChange' 
>;
