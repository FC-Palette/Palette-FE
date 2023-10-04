import { NAVIGATION_PATH } from "constants/index";
import { Footer, Header, MyPageChatBtn } from "components/index";
import { MyPageEditBtn, MyPageIntro, MyPagePostDisplay, MyPageSelectTab } from "components/index";
import { Notification, Setting2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { css, styled } from "styled-components";
import { useState } from "react";
import { myPageIntroProps } from "@/types";

export const MyPage = () => {
  const [userData, setUserData] = useState<myPageIntroProps | null>(null);
  
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
      <MyPageIntro userData={userData} setUserData={setUserData} />
      <BtnWrap>
        <MyPageEditBtn userData={userData} />
        <MyPageChatBtn hide={location.pathname === '/mypage/:member_id'}/>
      </BtnWrap>
      <MyPageSelectTab />
      <MyPagePostArea hide={userData?.response?.job === null && location.pathname === '/mypage'} >
        <MyPagePostDisplay/>
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
    ${(props) =>
    props.hide &&
    css`
      opacity: 0;
    `}
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 20px;
  width: 100%;
`