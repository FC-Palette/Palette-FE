import { useMediaQuery } from 'react-responsive'
import { styled } from 'styled-components'
export const MediaQuery = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:431px)'
  })
  const notMobile = useMediaQuery({ query: '(min-width:431px)' })

  return (
    <>
      {isMobile && children}
      {notMobile && <Wrapper>{children}</Wrapper>}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.greyScale.grey0};
  /* overflow: hidden; */
`
