import { theme } from 'styles/index'
import { TradesCard } from 'components/trades/index'
import { Header, Footer } from 'components/common/index'
import { css, styled } from 'styled-components'
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'

export const UsedTrade = () => {
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
      <MainWrapper>
        <TradesCard />
      </MainWrapper>
      <Footer />
    </>
  )
}
const MainWrapper = styled.div`
  padding-bottom: 10px;
`
const StyledIcon = styled.button`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
const IconWrapper = styled.button`
  margin-right: 10px;
`
