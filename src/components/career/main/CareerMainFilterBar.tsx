import { styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4 } from 'iconsax-react'
import { CareerMainFilterSortOption } from 'components/career/index'
import { CAREER_MAIN_FILTER_ITEMS } from '@/constants'
import { useState } from 'react'
import { careerFilterGlobalState } from '@/recoil'
import { useRecoilValue } from 'recoil'

export const CareerMainFilterBar = ({ toggleSideBar, toggleClosedFilter }) => {
  const [apiValue, setApiValue] = useState(0)
  const filterState = useRecoilValue(careerFilterGlobalState)

  const handleClosed = () => {
    const updatedApiValue = apiValue === 0 ? 1 : 0
    setApiValue(updatedApiValue)
    toggleClosedFilter(updatedApiValue)
  }

  const filteredList = Object.values(filterState).filter(item => {
    return (
      item !== undefined &&
      item !== null &&
      (typeof item !== 'string' || item.trim() !== '') &&
      (!Array.isArray(item) || item.length > 0)
    )
  })

  return (
    <Wrap>
      {/* 카테고리 필터 [직무, 직급, 성별 등] */}
      <CategoryWrap>
        <Category
          categoryList={filteredList}
          categoryFilter={
            <StyledIcon onClick={toggleSideBar}>
              <StyledSetting4>
                <Setting4 />
              </StyledSetting4>
            </StyledIcon>
          }
        />
      </CategoryWrap>

      {/* 생성일자 필터 [최신순, 오래된순]*/}
      <FilterWrap>
        <FilterBar
          filterButton={
            <CheckBox
              type="checkbox"
              onClick={handleClosed}
            />
          }
          filterText="마감된 모임 제외"
          filterOption={
            <CareerMainFilterSortOption
              items={CAREER_MAIN_FILTER_ITEMS}
              initialItem="최신순"
            />
          }></FilterBar>
      </FilterWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CategoryWrap = styled.div`
  display: flex;
  justify-content: column;
  width: auto;
`

const StyledIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 9px;
  z-index: 4;
  background-color: ${props => props.theme.main.blue0};
  margin-top: 10px;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

const FilterWrap = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`
