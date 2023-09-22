//모임/상품 정보(토글)
import { styled } from 'styled-components'
import { ChatTopBar, TopBarContent } from 'components/index'
import { EmojiHappy, ShoppingBag, ArrowUp2, ArrowDown2 } from 'iconsax-react'
import { inDetailState, isBuyingState } from 'recoil/index'
import { useRecoilState } from 'recoil'
import { theme } from 'styles/index'
export const ChatSubject = () => {
  const [inDetail, setInDetail] = useRecoilState(inDetailState)
  const [isBuying, setIsBuying] = useRecoilState(isBuyingState)
  const handleDetail = () => {
    setInDetail(!inDetail)
  }
  return (
    <ChatTopBar>
      {!isBuying && <EmojiHappy />}
      {isBuying && <ShoppingBag />}
      <TopBarContent>상품/계좌정보</TopBarContent>
      {!inDetail && (
        <ArrowDown2
          color={theme.greyScale.grey6}
          onClick={handleDetail}
          cursor="pointer"
        />
      )}
      {inDetail && (
        <ArrowUp2
          color={theme.greyScale.grey6}
          onClick={handleDetail}
          cursor="pointer"
        />
      )}
    </ChatTopBar>
  )
}
