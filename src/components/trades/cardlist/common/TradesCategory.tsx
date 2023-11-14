import { theme } from 'styles/index'
import { categoryMap } from 'constants/trades/index'
import { styled, css } from 'styled-components'
import { TradesClosingProps } from 'types/trades/index'

export const TradesCategory = ({ category, isClosing, isSoldOut }) => {
  const formattedCategory = categoryMap[category] || '알 수 없음'

  return (
    <CategoryWrapper
      isClosing={isClosing}
      isSoldOut={isSoldOut}>
      {formattedCategory}
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div<TradesClosingProps>`
  height: 25px;
  top: 158px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  font-size: ${theme.customSize.medium};
  background-color: ${theme.greyScale.grey2};
  display: flex;
  align-items: center;
  color: ${theme.greyScale.grey7};
  ${props =>
    (props.isClosing || props.isSoldOut) &&
    css`
      color: ${theme.greyScale.grey3};
    `}
  font-weight: 400;
`
