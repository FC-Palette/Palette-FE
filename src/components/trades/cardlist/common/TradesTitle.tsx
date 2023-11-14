import { theme } from 'styles/index'
import { styled, css } from 'styled-components'
import { TradesClosingProps } from 'types/trades/index'

export const TradesTitle = ({ title, isClosing, isSoldOut }) => {
  const maxLength = 23 // 최대 글자 수

  // 문자열이 최대 길이를 초과하면 "..."을 추가하여 자름
  const truncatedTitle =
    title.length > maxLength ? `${title.substring(0, maxLength)}..` : title

  return (
    <>
      <Title
        isClosing={isClosing}
        isSoldOut={isSoldOut}>
        {truncatedTitle}
      </Title>
    </>
  )
}

const Title = styled.div<TradesClosingProps>`
  width: 150px;
  font-weight: 400;
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey9};
  ${props =>
    (props.isClosing || props.isSoldOut) &&
    css`
      color: ${theme.greyScale.grey3};
    `}
  cursor: pointer;
`
