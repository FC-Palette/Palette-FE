import { useMediaQuery } from 'react-responsive'
import { styled } from 'styled-components'

export const MediaQuery = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)'
  })
  const notMobile = useMediaQuery({ query: '(min-width:767px)' })

  return (
    <>
      {isMobile && children}
      {notMobile && <Wrapper>{children}</Wrapper>}
    </>
  )
}

const Wrapper = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
  min-height: 100vh;
=======
  height: 100vh;
>>>>>>> a494a6e (feat: connect mypage route)
=======
>>>>>>> 6166572 (feat: Apply first UI && Constant separation)
  display: flex;
  min-height: 100vh;
  justify-content: center;
  background-color: ${props => props.theme.greyScale.grey0};
  /* overflow: hidden; */
`
