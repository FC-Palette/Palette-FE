import { styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4, Record } from 'iconsax-react'
import { CareerMainFilterSortOption } from 'components/career/index'

// import { GroupBuyingList, TradesOption } from 'components/trades/index'

export const CareerMainFilterBar = () => {
  return (
    <Wrapper>
      {/* 카테고리 필터 [직무, 직급, 성별 등] */}
      <Category
        categoryList={['전체']}
        categoryFilter={
          <StyledIcon>
            <StyledSetting4>
              <Setting4 />
            </StyledSetting4>
          </StyledIcon>
        }
      />

      {/* 생성일자 필터 [최신순, 오래된순]*/}
      <FilterBar
        filterButton={
          <StyledRecordWrapper>
            <StyledRecord>
              <Record />
            </StyledRecord>
          </StyledRecordWrapper>
        }
        filterText="마감된 모임 제외"
        filterOption={<CareerMainFilterSortOption />}></FilterBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.main.white};
  width: 100%;
  display: flex;
  position: sticky;
  flex-direction: column;
  top: 108px;
  padding-top: 10px;
  z-index: 1;
`
// 파란 아이콘 래퍼 [카테고리 필터]
const StyledIcon = styled.button`
  background-color: ${props => props.theme.main.blue0};
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`
// 파란 아이콘 아이템 [카테고리 필터]
const StyledSetting4 = styled(Setting4)`
  color: ${props => props.theme.main.white};
  width: ${props => props.theme.customSize.xlarge};
  height: ${props => props.theme.customSize.xlarge};
`
// 파란 동그라미 래퍼 [생성일자 필터]
const StyledRecordWrapper = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`
// 파란 동그라미 아이템 [생성일자 필터]
const StyledRecord = styled(Record)`
  color: ${props => props.theme.main.blue0};
  width: 20px;
  height: 20px;
`
