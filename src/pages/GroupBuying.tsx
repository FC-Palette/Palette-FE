import { theme } from 'styles/index'
import { GroupBuyingList } from 'components/trades/index'
import { Header } from 'components/common/Header'
import { css, styled } from 'styled-components'

export const GroupBuying = () => {
  return (
    <>
      <Header
        leftIcon="콘"
        centerText="Header Text"
        chatCount={2}>
        <div>콘</div>
        <div>콘</div>
      </Header>
      <Wrapper>
        <CardWrapper>
          <GroupBuyingList />
        </CardWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: auto;
  display: flex;
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
