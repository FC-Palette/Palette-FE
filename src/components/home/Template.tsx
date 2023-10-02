import { styled } from 'styled-components'
import { useState, useLayoutEffect } from 'react'
//NavArea들 모으는 배경

export const Template = ({ children }) => {
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  return <Align $innerHeight={innerHeight}>{children}</Align>
}

const Align = styled.div<{ $innerHeight?: number }>`
  overflow: scroll;
  padding-top: 323px;
  background-color: ${props => props.theme.greyScale.grey1};
  height: ${props => props.$innerHeight}px;
`
