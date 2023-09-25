import { styled, css } from 'styled-components'
import { Badge, centralise } from 'components/index'
export const Participation = ({ status, $prev, $prevtype }) => {
  return (
    <Wrapper
      $prev={$prev}
      $prevtype={$prevtype}>
      <Badge>
        <Text>
          <Bold>{status.split('님이')[0]}</Bold>님이{status.split('님이')[1]}
        </Text>
      </Badge>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ $prev: boolean; $prevtype: string }>`
  ${centralise};
  padding: ${props =>
    props.$prev || props.$prevtype === 'join' || props.$prevtype === 'exit'
      ? '4px 0 20px'
      : '20px 0'};
  font-size: 14px;
`
const Text = styled.div`
  padding-top: 3px;
`
const Bold = styled.span`
  font-weight: 500;
`
