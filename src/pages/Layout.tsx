import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from 'components/index'

export const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
