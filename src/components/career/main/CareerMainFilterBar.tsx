import { styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4, Record, RecordCircle } from 'iconsax-react'
import { CareerMainFilterSortOption } from 'components/career/index'

// import { GroupBuyingList, TradesOption } from 'components/trades/index'

export const CareerMainFilterBar = () => {
  const list = ['전체1', '전체2', '전체3', '전체4']

  return (
    <>
      {/* 카테고리 필터 [직무, 직급, 성별 등] */}
      <CaregoryWrap>
        <Category
          categoryList={list}
          categoryFilter={
            <StyledIcon>
              <StyledSetting4>
                <Setting4 />
              </StyledSetting4>
            </StyledIcon>
          }
        />
      </CaregoryWrap>

      {/* 생성일자 필터 [최신순, 오래된순]*/}
      <FilterWrap>
        <FilterBar
          filterButton={
            <StyledRecordWrapper>
              <CheckBox type="checkbox" />
            </StyledRecordWrapper>
          }
          filterText="마감된 모임 제외"
          filterOption={<CareerMainFilterSortOption />}></FilterBar>
      </FilterWrap>
    </>
  )
}

const CaregoryWrap = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`

const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
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

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.main.blue0};
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;

  &:checked {
    border: 4px solid ${props => props.theme.main.blueChat};
    background-color: ${props => props.theme.main.blueD1};
  }
`
