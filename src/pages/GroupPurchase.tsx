import { theme } from 'styles/index'
import { GroupPurchaseList } from 'components/trades/cardlist/index'
import { Header, Footer, SubHeader } from 'components/common/index'
import { TRADES_SUBHEADER_TEXT } from 'constants/trades/index'
import { styled } from 'styled-components'
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'

export const GroupPurchase = () => {
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
        <GroupPurchaseList />
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
