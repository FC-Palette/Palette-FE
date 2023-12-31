import { useMediaQuery } from 'react-responsive'
import { styled } from 'styled-components'
import { useState, useLayoutEffect } from 'react'
import { Flexbox } from 'styles/index'

export const MediaQuery = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:431px)'
  })
  const notMobile = useMediaQuery({ query: '(min-width:431px)' })
  const [innerHeight, setInnerHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerHeight(window.innerHeight)
    }
  }, [])

  return (
    <>
      {isMobile && children}
      {notMobile && <Wrapper $innerHeight={innerHeight}>{children}</Wrapper>}
    </>
  )
}

const Wrapper = styled(Flexbox)<{ $innerHeight?: number }>`
  justify-content: center;
  background-color: ${props => props.theme.greyScale.grey0};
  height: ${props => props.$innerHeight}px;
`
