import { isGreyProps } from '@/types'
import { styled } from 'styled-components'

export const CareerMainItemTitle = ({ title, remainingSeats }) => {
  const renderContents = () => {
    if (remainingSeats === 0) {
      return (
        <Title $isGrey={true}>
          {title.length > 15 ? title.slice(0, 10) + '...' : title || '없음'}
        </Title>
      )
    }
    return (
      <Title>
        {title.length > 15 ? title.slice(0, 10) + '...' : title || '없음'}
      </Title>
    )
  }

  return renderContents()
}

const Title = styled.div<isGreyProps>`
  color: ${props =>
    props.$isGrey ? props.theme.greyScale.grey3 : props.theme.greyScale.grey9};
  font-size: ${props => props.theme.customSize.xlarge};
  font-weight: 600;
`
