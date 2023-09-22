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
  min-width: 375px;
  max-width: 430px;
  min-height: 932px;
  overflow-x: hidden;
`
