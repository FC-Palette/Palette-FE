import { Footer, Header } from "components/index";
import { MyPageEditBtn, MyPageIntro, MyPagePostDisplay, MyPageSelectTab } from "components/index";
import { Notification, Setting2 } from "iconsax-react";
import { styled } from "styled-components";

export const MyPage = () => {


  return (
    <MyPageWrap>      
      <Header centerText="마이페이지">
        <StyledIcon>
          <Notification />
        </StyledIcon>
        <IconWrapper>
          <Setting2 />
        </IconWrapper>
      </Header>
      <MyPageIntro></MyPageIntro>
      <MyPageEditBtn></MyPageEditBtn>
      <MyPagePostArea>
        <MyPageSelectTab />
        <MyPagePostDisplay></MyPagePostDisplay>
      </MyPagePostArea>
      <Footer />
    </MyPageWrap>
  )
}

const MyPageWrap = styled.div`
  position: relative;
`

const IconWrapper = styled.div`
  margin-left: 5px;
`

const StyledIcon = styled.div`
  margin-right: 5px;
`

const MyPagePostArea = styled.div`
  
`
