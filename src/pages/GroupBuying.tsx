import { theme } from 'styles/index'
import { TradesCard } from 'components/trades/index'
import { Header } from 'components/common/index'
import { css, styled } from 'styled-components'

export const GroupBuying = () => {
  return (
    <>
      <Header
        leftIcon="콘"
        centerText="채팅"
        chatCount={2}>
        <div>콘</div>
        <div>콘</div>
      </Header>
      <TradesCard />
    </>
  )
}
