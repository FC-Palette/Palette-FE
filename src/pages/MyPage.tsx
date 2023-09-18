import { NAVIGATION_PATH } from "constants/index";
import { Footer, Header } from "components/index";
import { MyPageEditBtn, MyPageIntro, MyPagePostDisplay, MyPageSelectTab } from "components/index";
import { Notification, Setting2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MyPage = () => {


  return (
    <MyPageWrap>      
      <Header centerText="마이페이지">
        <StyledIcon>
          <Notification />
        </StyledIcon>
        <IconWrapper>
          <Link {...NAVIGATION_PATH.navigatorSettingPage}>
          <Setting2 />
          </Link>
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
