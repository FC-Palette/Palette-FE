import { styled } from 'styled-components'
import { Calendar } from 'iconsax-react'
export const DateSeperator = ({ date, $isFirst }) => {
  return (
    <Wrapper $isFirst={$isFirst}>
      <Badge>
        <Calendar size="16" />
        <Date>{date} 목요일</Date>
      </Badge>
    </Wrapper>
  )
}
const Wrapper = styled.div<{ $isFirst: string }>`
  display: flex;
  justify-content: center;
  padding-top: ${props => (props.$isFirst ? '' : '8px')};
`
const Badge = styled.div`
  border-radius: 24px;
  display: flex;
  padding: 4px 10px;
  color: ${props => props.theme.main.white};
  background-color: ${props => props.theme.greyScale.grey5};
`
const Date = styled.div`
  padding-left: 4px;
  padding-top: 3px;
  font-size: 14px;
`
