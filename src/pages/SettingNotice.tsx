import { Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { StyledIcon } from "pages/index"
import { theme } from "styles/index"
import { SETTING_NOTICE_TEXT } from "constants/index"
import { useNavigate } from "react-router-dom"

export const SettingNotice = () => {
  const navigate = useNavigate()
  return (
    <ServiceWrap>
      <Header 
      leftIcon={
      <StyledIcon onClick={() => navigate(-1)}>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="공지사항">
      </Header>


      <SettingListWrap>
        {SETTING_NOTICE_TEXT.settingNoticeText}
      </SettingListWrap>
    </ServiceWrap>
  )
}


const ServiceWrap = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
  max-width: 430px;
  Header{
    border-bottom: 1px solid ${theme.greyScale.grey3};
  }
`


const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
  text-align: center;
  padding-top: 20px;
  color: ${theme.greyScale.grey6};
`