import { theme } from 'styles/index'
import { TradesCard, TradesOption } from 'components/trades/cardlist/index'
import { styled } from 'styled-components'
import { FilterBar, Category, CreateBtn } from 'components/common/index'

import { Setting4, Record } from 'iconsax-react'

export const GroupPurchaseList = () => {
  const groupUploadPath = '/groupUpload/1'

  return (
    <Wrapper>
      <CategoryWrapper>
        <Category
          categoryList={["전체"]}
          categoryFilter={
            <StyledIcon>
              <StyledSetting4>
                <Setting4 />
              </StyledSetting4>
            </StyledIcon>
          }
        />
      </CategoryWrapper>
      <FilterBarWrapper>
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
      </FilterBarWrapper>
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
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px 4%;
`

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  margin-top: 10px;
`

const FilterBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
