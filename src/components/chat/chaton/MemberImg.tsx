import { styled } from 'styled-components'
export const MemberImg = ({ src }) => {
  return (
    <>
      <ImgBox
        src={src}
        onClick={() => {
          ;('여기에 이벤트 => 해당 유저 마이페이지 이동')
        }}
      />
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
  cursor: pointer;
`
