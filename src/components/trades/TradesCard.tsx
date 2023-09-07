import { theme } from 'styles/index'
import { GroupBuyingList, TradesOption } from 'components/trades/index'
import { css, styled } from 'styled-components'
import { FilterBar } from 'components/common/index'

export const TradesCard = () => {
  return (
    <Wrapper>
      <FilterBar filterButton={<TradesOption />}></FilterBar>
      <CardWrapper>
        <GroupBuyingList />
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: auto;
  justify-content: center;
`

const CardWrapper = styled.div`
  width: 360px;
  top: 197px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
