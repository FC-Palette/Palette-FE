import { styled } from 'styled-components'
import { formatHourMinute } from 'utils/index'
export const UnreadTime = ({ time }) => {
  return <Wrapper>{formatHourMinute(time)}</Wrapper>
}

const Wrapper = styled.div`
  font-size: 10px;
  min-width: 45px;
  color: ${props => props.theme.greyScale.grey6};
`
