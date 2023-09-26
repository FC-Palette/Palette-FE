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
          <Link {...NAVIGATION_PATH.navigatorAlarm} >
          <Notification />
          </Link>
        </StyledIcon>
        <IconWrapper>
          <Link {...NAVIGATION_PATH.navigatorSettingPage}>
          <Setting2 />
          </Link>
        </IconWrapper>
      </Header>
      <MyPageIntro />
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
  max-width: 430px;
  width: 100%;
`

const IconWrapper = styled.div`
  margin-left: 5px;
  :visited{
    color: inherit;
  }
  :link{
    color: inherit;
  }
    `

const StyledIcon = styled.div`
  margin-right: 5px;
  :visited{
    color: inherit;
  }
  :link{
    color: inherit;
  }
`

const MyPagePostArea = styled.div`
  
`
