import { theme } from 'styles/index'
import { GroupBuyingList } from 'components/trades/index'
import { Header } from 'components/common/Header'
import { css, styled } from 'styled-components'

export const GroupBuying = () => {
  return (
    <>
      <Header
        leftIcon="콘"
        rightContent={['콘', '콘']}
        centerText="Header Text"
        chatCount={2}
      />
      <CardWrapper>
        <GroupBuyingList />
      </CardWrapper>
    </>
  )
}

const CardWrapper = styled.div`
  width: 382px;
  top: 197px;
  justify-content: space-between;
  margin-left: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
