//모임/상품 정보(토글)
import { styled } from 'styled-components'
import { ChatTopBar, TopBarContent } from 'components/index'
import { EmojiHappy, ShoppingBag, ArrowUp2, ArrowDown2 } from 'iconsax-react'

export const ChatSubject = ({ isBuying, inDetail }) => {
  return (
    <ChatTopBar>
      {!isBuying && <EmojiHappy />}
      {isBuying && <ShoppingBag />}
      <TopBarContent>상품/계좌정보</TopBarContent>
      {!inDetail && <ArrowUp2 />}
      {inDetail && <ArrowDown2 />}
    </ChatTopBar>
  )
}
