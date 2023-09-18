import { theme } from 'styles/index'
import { TradesCard, TradesOption } from 'components/trades/index'
import { css, styled } from 'styled-components'
import {
  FilterBar,
  Category,
  CreateBtn,
  SubHeader
} from 'components/common/index'
import { TRADES_SUBHEADER_TEXT } from 'constants/trades/index'
import { Setting4, Record } from 'iconsax-react'

export const GroupPurchaseList = () => {
  const groupUploadPath = '/groupUpload'

  return (
    <Wrapper>
      <SubHeader
        items={TRADES_SUBHEADER_TEXT}
        initialItem="공동구매"
      />
      <Category
        categoryList="전체"
        categoryFilter={
          <StyledIcon>
            <StyledSetting4>
              <Setting4 />
            </StyledSetting4>
          </StyledIcon>
        }
      />
      <FilterBar
        filterButton={
          <StyledRecordWrapper>
            <StyledRecord>
              <Record />
            </StyledRecord>
          </StyledRecordWrapper>
        }
        filterText="마감된 거래 제외"
        filterOption={<TradesOption />}></FilterBar>

      <Main>
        <CreateBtn path={groupUploadPath} />
        <CardWrapper>
          <TradesCard />
        </CardWrapper>
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const CardWrapper = styled.div`
  width: 360px;
  top: 197px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const StyledIcon = styled.button`
  background-color: ${theme.main.blue0};
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledRecordWrapper = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

const StyledSetting4 = styled(Setting4)`
  color: ${theme.main.white};
  width: ${theme.customSize.xlarge};
  height: ${theme.customSize.xlarge};
`

const StyledRecord = styled(Record)`
  color: ${theme.main.blue0};
  width: 20px;
  height: 20px;
`
