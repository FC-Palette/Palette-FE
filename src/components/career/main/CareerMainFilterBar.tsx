import { styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4 } from 'iconsax-react'
import { CareerMainFilterSortOption } from 'components/career/index'
import { CAREER_MAIN_FILTER_ITEMS } from '@/constants'

// import { GroupBuyingList, TradesOption } from 'components/trades/index'

export const CareerMainFilterBar = () => {
  const list = ['집에', '가고싶다', '이게 사람사는', '삶이가']

  return (
    <Wrap>
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
          filterButton={<CheckBox type="checkbox" />}
          filterText="마감된 모임 제외"
          filterOption={
            <CareerMainFilterSortOption items={CAREER_MAIN_FILTER_ITEMS} />
          }></FilterBar>
      </FilterWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
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
  margin-top: 10px;
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

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
