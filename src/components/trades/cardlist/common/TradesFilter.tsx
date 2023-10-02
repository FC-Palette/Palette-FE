import { styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4 } from 'iconsax-react'
import { TRADES_MAIN_FILTER_ITEMS } from 'constants/trades/index'
import { centralise, rowCentralise } from 'styles/index'
import { CareerMainFilterSortOption } from '@/components/career'

export const TradesFilter = ({ toggleSideBar }) => {
  const list = ['']

  return (
    <>
      <CaregoryWrap>
        <Category
          categoryList={list}
          categoryFilter={
            <StyledIcon onClick={toggleSideBar}>
              <StyledSetting4>
                <Setting4 />
              </StyledSetting4>
            </StyledIcon>
          }
        />
      </CaregoryWrap>

      {/* 생성일자 필터 [최신순, 오래된순]*/}
      <CaregoryWrap>
        <FilterBar
          filterButton={
            <StyledRecordWrapper>
              <CheckBox type="checkbox" />
            </StyledRecordWrapper>
          }
          filterText="마감된 거래 제외"
          filterOption={
            <CareerMainFilterSortOption
              items={TRADES_MAIN_FILTER_ITEMS}
              initialItem="최신순"
            />
          }></FilterBar>
      </CaregoryWrap>
    </>
  )
}

const CaregoryWrap = styled.div`
  ${rowCentralise};
  width: auto;
`

// 파란 아이콘 래퍼 [카테고리 필터]
const StyledIcon = styled.button`
  background-color: ${props => props.theme.main.blue0};
  width: 34px;
  height: 34px;
  border-radius: 12px;
  ${centralise};
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

  border: 2px solid ${props => props.theme.main.blue0};

  cursor: pointer;
  transition: background 0.2s;

  &:checked {
  }
`
