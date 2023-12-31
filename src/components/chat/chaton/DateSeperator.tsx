import { styled } from 'styled-components'
import { Calendar } from 'iconsax-react'
import { Flexbox, rowCentralise } from 'styles/index'

export const DateSeperator = ({ date, $isFirst }) => {
  return (
    <Wrapper $isFirst={$isFirst}>
      <Badge>
        <Calendar size="16" />
        <Date>{date}</Date>
      </Badge>
    </Wrapper>
  )
}
const Wrapper = styled.div<{ $isFirst: string }>`
  ${rowCentralise};
  user-select: none;

  padding: 20px 0;
  padding-top: ${props => (props.$isFirst ? '' : '24px')};
`
export const Badge = styled(Flexbox)`
  border-radius: 24px;
  padding: 4px 10px;
  color: ${props => props.theme.greyScale.grey5};
  background-color: ${props => props.theme.greyScale.bluegrey};
`
const Date = styled.div`
  padding-left: 4px;
  padding-top: 3px;
  font-size: 14px;
`
