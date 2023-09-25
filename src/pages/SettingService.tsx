import { Header } from "components/index"
import { ArrowLeft2, ArrowRight2 } from "iconsax-react"
import { styled } from "styled-components"
import { SETTING_SERVICE_TEXT } from "constants/index"
import { theme } from "styles/index"
import { useNavigate } from "react-router-dom"

export const SettingService = () => {
  const navigate = useNavigate()
  return (
    <ServiceWrap>
      <Header 
      leftIcon={
      <StyledIcon onClick={() => navigate(-1)}>
        <ArrowLeft2 />
      </StyledIcon>}
      centerText="고객센터">
      </Header>


      <SettingListWrap>
        <HelpMessageWrap>
          {SETTING_SERVICE_TEXT.serviceHelpText}
          <img src="/src/assets/questionMark.png" alt="questionMarkImg" />
        </HelpMessageWrap>
        <MenuWrap>
            {SETTING_SERVICE_TEXT.serviceQuestionText}
            <ArrowRight2 />
        </MenuWrap>
        <MenuWrap>
          {SETTING_SERVICE_TEXT.serviceReportText}
          <ArrowRight2 />  
        </MenuWrap>
        <TermsWrap>
          {SETTING_SERVICE_TEXT.serviceTermsText}
          <SubWrap>
            <div>{SETTING_SERVICE_TEXT.serviceTermsOfUseText}<ArrowRight2 /> </div>
            <div>{SETTING_SERVICE_TEXT.servicePrivacyPolicyText}<ArrowRight2 /> </div>
          </SubWrap>
        </TermsWrap>
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
  svg{
    cursor: pointer;
  }
`


const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
`

const HelpMessageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${theme.greyScale.grey3};
  white-space: pre-line;
  line-height: 35px;
  font-size: 27px;
  font-weight: 600;
  padding: 30px 16px;
  padding-bottom: 35px;
  img{
    position: relative;
    margin-right: 30px;
    width: 23%;
    min-width: 50px;
    max-height: 130px;
  }
`

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid ${theme.greyScale.grey1};
  border-bottom: 2px solid ${theme.greyScale.grey3};
  font-weight: 600;
  font-size: 17px;
  padding: 16px;
  cursor: pointer;
  svg{
    width: 20px;
    height: 20px;
    font-weight: bold;
    margin-right: 12px;
  }
`

const TermsWrap = styled.div`
  border-top: 3px solid ${theme.greyScale.grey1};
  font-weight: 600;
  padding: 16px;
  font-size: 17px;
`

const SubWrap = styled.div`
  padding-top: 14px;
  color: ${theme.greyScale.grey5};
  div{
    padding: 14px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    svg{
    width: 20px;
    height: 20px;
    font-weight: bold;
    margin-right: 12px;
  }
  }
`
const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`