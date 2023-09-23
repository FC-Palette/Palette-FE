import { ProfileEnterWrap } from 'components/career'
import styled from 'styled-components'
export const CareerIsNotUserInfo = () => {
  return (
    <Wrap>
      <ProfileEnterWrap />
    </Wrap>
  )
}

// dev 기준
// const Wrap = styled.div`
//   width: 100%;
//   min-width: 375px;
//   max-width: 430px;
//   min-height: 932px;
//   overflow-x: hidden;
// `

// 수정 (9.23)
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
