//모임/상품 정보(토글)
import { ChatTopBar, TopBarContent } from 'components/index'
import { EmojiHappy, ShoppingBag, ArrowUp2, ArrowDown2 } from 'iconsax-react'
import { inDetailState } from 'recoil/index'
import { useRecoilState } from 'recoil'
import { theme } from 'styles/index'
import { CHAT_TEXTS } from 'constants/index'

export const ChatSubject = ({ isBuying }) => {
  const [inDetail, setInDetail] = useRecoilState(inDetailState)
  const handleDetail = () => {
    setInDetail(!inDetail)
  }

  return (
    <ChatTopBar>
      {!isBuying && <EmojiHappy />}
      {isBuying && <ShoppingBag />}
      <TopBarContent>
        {isBuying && CHAT_TEXTS.product}
        {!isBuying && CHAT_TEXTS.group}
      </TopBarContent>
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
