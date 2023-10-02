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

const ImgBox = styled.div<{ src: string }>`
  content: url(${props => props.src});
  min-width: 32px;
  height: 32px;
  background-clip: content-box;
  border-radius: 8px;
  box-sizing: content-box;
  margin-top: 14px;
  margin-right: 12px;
  cursor: pointer;
`
