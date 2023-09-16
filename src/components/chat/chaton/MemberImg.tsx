import { styled } from 'styled-components'
export const MemberImg = ({ src }) => {
  return (
    <>
      <ImgBox src={src} />
    </>
  )
}

const ImgBox = styled.img`
  min-width: 32px;
  height: 32px;
  border-radius: 8px;
  /* border: 1px solid red; */
  box-sizing: content-box;
  padding-top: 14px;
  padding-right: 12px;
`
