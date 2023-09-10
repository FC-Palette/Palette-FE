import { theme } from '@/styles'
import { css, styled } from 'styled-components'
import { BorderType, ButtonProps, SizeType, StyleType } from 'types/index'

//$ 접두사를 사용 - transpiled props생성, styled-components 오류 해결
//배경색($bgColor), 텍스트컬러(color), 사이즈($btnSize), 테두리 색상($borderColor)
// [+ 버튼(컴포넌트), 로딩이미지 등] (children)을 고려
export const Button = ({
  color,
  $bgColor,
  $borderColor,
  $borderRadius,
  $btnHeight,
  $btnWidth,
  $fontSize,
  disabled, 
  children,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      color={color}
      $bgColor={$bgColor}
      $borderColor={$borderColor}
      $borderRadius={$borderRadius}
      $btnHeight={$btnHeight}
      $btnWidth={$btnWidth}
      $fontSize={$fontSize}
      disabled={disabled}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

//사이즈 정리 필요
const sizeStyles = css<SizeType>`
  ${({ $btnWidth = '127px', $btnHeight = '48px', $fontSize }) => css`
    width: ${$btnWidth};
    height: ${$btnHeight};
    font-size: ${$fontSize};
  `}
`

const borderStyles = css<BorderType>`
  ${({ $borderRadius = '8px' }) => css`
    border-radius: ${$borderRadius};
  `}
  border: 1px solid ${({ theme, $borderColor }) =>
    $borderColor || theme.main.blue0};
`

const Wrapper = styled.button<StyleType>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .4s;
  ${borderStyles};
  color: ${({ theme, color }) => color || theme.main.white};
  background-color: ${({ theme, $bgColor }) => $bgColor || theme.main.blue0};
  ${sizeStyles};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${theme.greyScale.grey1};
      color: ${theme.greyScale.grey3};
      border: 1px solid transparent;
      transition: all .4s;
      cursor: not-allowed;
    `}
`
