import { css, styled } from 'styled-components'
import { InputProps, InputType } from 'types/index'
//width, height - inputSize
//아이콘(absolute)을 위해서는 부모 relative요소가 필요, 감싸는 태그 고민(label, div)
//<label><Input/>{children}</label> => 구조 : children
export const Input = ({
  $inputWidth,
  $inputHeight,
  $borderColor,
  $borderRadius,
  children,
  ph,
  type,
  value,
  $paddingLeft,
  ...props
}: InputProps) => {
  return (
    <Wrapper>
      {/* 인터페이스 생성 */}
      <TextInput
        {...props}
        $inputWidth={$inputWidth}
        $inputHeight={$inputHeight}
        $borderColor={$borderColor}
        $borderRadius={$borderRadius}
        $paddingLeft={$paddingLeft}
        type={type}
        value={value}
        placeholder={ph}
      />
      {/* absolute를 통해 Icon */}
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.label<InputProps>`
  position: relative;
`

const TextInput = styled.input<InputType>`
  ${({ $inputWidth = '421px', $inputHeight = '48px' }) => css`
    width: ${$inputWidth};
    height: ${$inputHeight};
  `}
  ${({ $borderColor, theme }) => css`
    border: 1px solid ${$borderColor || theme.greyScale.grey3};
  `}
  ${({ $borderRadius = '8px' }) => css`
    border-radius: ${$borderRadius};
  `}
  ${({ $paddingLeft = '20px' }) => css`
    padding-left: ${$paddingLeft};
  `}
  

  &:focus {
    outline: none;
  }
`
