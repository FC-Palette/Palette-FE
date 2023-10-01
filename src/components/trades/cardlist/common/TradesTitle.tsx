import { theme } from 'styles/index'
import { styled } from 'styled-components'

export const TradesTitle = ({ title }) => {
  const maxLength = 23 // 최대 글자 수

  // 문자열이 최대 길이를 초과하면 "..."을 추가하여 자름
  const truncatedTitle =
    title.length > maxLength ? `${title.substring(0, maxLength)}..` : title

  return (
    <>
      <Title>{truncatedTitle}</Title>
    </>
  )
}

const Title = styled.div`
  width: 150px;
  font-weight: 400;
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey9};
  cursor: pointer;
`
