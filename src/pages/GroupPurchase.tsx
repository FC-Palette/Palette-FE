import { theme } from 'styles/index'
import { GroupPurchaseList } from 'components/trades/cardlist/index'
import { Header, Footer, SubHeader } from 'components/common/index'
import { TRADES_SUBHEADER_TEXT } from 'constants/trades/index'
import { styled } from 'styled-components'
import { ArrowLeft2, SearchNormal1, Notification } from 'iconsax-react'
import { TradesFilter } from 'components/trades/cardlist/index'
import { SideBar } from 'components/common/index'
import { CATEGORY_TEXT } from 'constants/trades/index'
import { sideBarState } from 'recoil/index'
import { useRecoilState } from 'recoil'

export const GroupPurchase = () => {
  const [isOpen, setIsOpen] = useRecoilState(sideBarState)

  const toggleSideBar = () => {
    setIsOpen(true)
  }

  return (
    <>
      {isOpen && (
        <SideBar
          centerText="공동 구매"
          items={CATEGORY_TEXT}
        />
      )}
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
      <CategoryWrapper>
        <FilterWrapper>
          <TradesFilter toggleSideBar={toggleSideBar} />
        </FilterWrapper>
      </CategoryWrapper>
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
const StyledIcon = styled.div`
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
`
const IconWrapper = styled.div`
  margin-right: 10px;
  color: ${theme.main.black};
  font-size: ${theme.customSize.xxlarge};
`

const FilterWrapper = styled.div`
  width: 95%;
  margin-top: 10px;
`

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
`
