import { styled } from 'styled-components'
import { FilterBar, Category } from 'components/common/index'
import { Setting4 } from 'iconsax-react'
import { TRADES_MAIN_FILTER_ITEMS, categoryMap } from 'constants/trades/index'
import { centralise, rowCentralise } from 'styles/index'
import { CareerMainFilterSortOption } from 'components/career/index'
import { SecondHandFilterState } from 'recoil/tradescreateglobalstate'
import { useRecoilValue } from 'recoil'

export const TradesFilter = ({ toggleSideBar, ClosingData }) => {
  const secondHandFilterGlobalState = useRecoilValue(SecondHandFilterState)

  const filteredList = secondHandFilterGlobalState.category
    ? Object.values(secondHandFilterGlobalState.category)
        .filter(item => {
          return (
            (typeof item !== 'string' || item.trim() !== '') &&
            (!Array.isArray(item) || item.length > 0)
          )
        })
        .map(category => {
          if (Array.isArray(category)) {
            return category.map(cat => categoryMap[cat] || cat).join(', ')
          } else {
            return categoryMap[category] || category
          }
        })
    : []

  return (
    <Wrap>
      <CaregoryWrap>
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
      </CaregoryWrap>

      <CaregoryWrap>
        <FilterBar
          filterButton={
            <StyledRecordWrapper>
              <CheckBox
                onClick={ClosingData}
                type="checkbox"
              />
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
    </Wrap>
  )
}
const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CaregoryWrap = styled.div`
  ${rowCentralise};
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
  ${centralise};
`

const StyledSetting4 = styled(Setting4)`
  color: ${props => props.theme.main.white};
  width: ${props => props.theme.customSize.xlarge};
  height: ${props => props.theme.customSize.xlarge};
`

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
