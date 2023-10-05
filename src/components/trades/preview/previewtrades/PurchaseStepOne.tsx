import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { PurchaseUploadList } from 'components/trades/upload/index'
import { useSetRecoilState } from 'recoil'
import {
  ImageState,
  initialImageState,
  initialTradeCreateGlobalState,
  tradescreateglobalstate
} from 'recoil/index'

export const PurchaseStepOne = () => {
  const navigate = useNavigate()
  const setImageGlobalState = useSetRecoilState(ImageState)
  const setTradesGlobalState = useSetRecoilState(tradescreateglobalstate)

  const handleButton = () => {
    setTradesGlobalState(initialTradeCreateGlobalState)
    setImageGlobalState(initialImageState)
    navigate('/groupPurchase')
  }

  return (
    <>
      <Header
        centerText="공동 구매 제안하기"
        leftIcon={
          <StyledIcon onClick={handleButton}>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <PurchaseUploadList></PurchaseUploadList>
    </>
  )
}
const StyledIcon = styled.div`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
