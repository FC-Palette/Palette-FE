import { theme } from 'styles/index'
import { GroupBuyingList, TradesOption } from 'components/trades/index'
import { css, styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4, Record } from 'iconsax-react'

export const TradesCard = () => {
  return (
    <Wrapper>
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
        <CardWrapper>
          <GroupBuyingList />
        </CardWrapper>
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: auto;
`

const Main = styled.div`
  width: auto;
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
