import { styled } from 'styled-components'
import { Button } from 'components/index'
import { Additem, Image } from 'iconsax-react'
import { theme } from '@/styles'
export const SendFile = () => {
  return (
    <Wrapper>
      <Button
        color={theme.greyScale.grey5}
        $bgColor={theme.greyScale.bluegrey}
        $borderColor={theme.greyScale.bluegrey}
        $btnHeight="60px"
        $btnWidth="89%">
        <Image />
        &nbsp;이미지 전송하기
      </Button>
      <Button
        color={theme.greyScale.grey5}
        $bgColor={theme.greyScale.bluegrey}
        $borderColor={theme.greyScale.bluegrey}
        $btnHeight="60px"
        $btnWidth="89%">
        <Additem />
        &nbsp;파일 전송하기
      </Button>
      {/* <SendBox>SendFile</SendBox>
      <SendBox>SendFile</SendBox> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 375px;
  max-width: 430px;
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 32px;
  color: ${props => props.theme.greyScale.bluegrey};
`
// const SendBox = styled.div`
//   background-color: ${props => props.theme.main.white};
//   color: ${props => props.theme.main.blue0};
//   cursor: pointer;
// `
