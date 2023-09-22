import { ProfileEnterWrap } from 'components/career'
import styled from 'styled-components'
export const CareerIsNotUserInfo = () => {
  return (
    <Wrap>
      <ProfileEnterWrap />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  /* height: 100%; */
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  overflow: hidden;
`
