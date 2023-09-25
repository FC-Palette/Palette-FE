import { Header } from "components/index"
import { ArrowLeft2 } from "iconsax-react"
import { styled } from "styled-components"
import { SettingMenuList } from "components/setting"


export const Setting = () => {
  return (
    <SettingContainer>
      <Header 
        leftIcon={
        <StyledIcon>
          <ArrowLeft2 />
        </StyledIcon>}
        centerText="설정">
      </Header>
      <SettingListWrap>
          <SettingMenuList></SettingMenuList>
      </SettingListWrap>
    </SettingContainer>
  )
}


const SettingContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  position: relative;
  width: 100%;
`

const StyledIcon = styled.div`
  color: #000;
  font-size: ${props => props.theme.customSize.xxlarge};
`

const SettingListWrap = styled.div`
  width: 430px;
  max-width: 100%;
`