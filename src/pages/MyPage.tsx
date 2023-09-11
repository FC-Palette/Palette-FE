import { Footer, Header } from "@/components"
import { Notification, Setting2 } from "iconsax-react"
import styled from "styled-components"


export const MyPage = () => {
  return (
    <MyPageWrap>      
      <Header
    centerText="마이페이지">
      <StyledIcon>
      <Notification />
      </StyledIcon>
      <IconWrapper>
      <Setting2 />
      </IconWrapper>
      </Header>
      <Footer />
    </MyPageWrap>
  )
}


const MyPageWrap = styled.div`
  position: relative;
  height: 100vh;
  
`

const IconWrapper = styled.div`
  margin-left: 5px;
`

const StyledIcon = styled.div`
  margin-right: 5px;
`


