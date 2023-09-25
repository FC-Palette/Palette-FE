import { theme } from 'styles/index'
import { SecondHandList } from 'components/trades/cardlist/index'
import { Header, Footer, SubHeader } from 'components/common/index'
import { styled } from 'styled-components'
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'
import { TRADES_SUBHEADER_TEXT } from 'constants/trades/index'

export const SecondHand = () => {
  return (
    <>
      <Header
        leftIcon={
          <StyledIcon>
            <ArrowLeft2 />
          </StyledIcon>
        }
        centerText="같이 사요">
        <IconWrapper>
          <SearchNormal1 />
        </IconWrapper>
        <StyledIcon>
          <Notification />
        </StyledIcon>
      </Header>
      <SubHeader
        items={TRADES_SUBHEADER_TEXT}
        initialItem="공동구매"
      />
      <MainWrapper>
        <SecondHandList />
      </MainWrapper>
      <Footer />
    </>
  )
}
const MainWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 10px;
`
const StyledIcon = styled.button`
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
`
const IconWrapper = styled.button`
  margin-right: 10px;
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
`
