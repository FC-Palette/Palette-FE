import { styled } from 'styled-components'
export const NavContainer = ({ $top, $middle, $bottom, children }) => {
  return (
    <Container
      $top={$top}
      $middle={$middle}
      $bottom={$bottom}>
      {children}
    </Container>
  )
}

const Container = styled.div<{
  $top: string
  $middle: string
  $bottom: string
}>`
  padding: ${props => props.$top}px ${props => props.$middle}px
    ${props => props.$bottom}px;
`
