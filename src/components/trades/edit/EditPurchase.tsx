import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { EditPurchaseUploadList } from 'components/trades/edit/index'
import { useSetRecoilState } from 'recoil'
import {
  editPurchaseImage,
  initialImageEdit,
  initialTradeModifyGlobalState,
  tradesModifyGlobalState
} from 'recoil/index'

export const EditPurchase = () => {
  const navigate = useNavigate()
  const editImageState = useSetRecoilState(editPurchaseImage)
  const setTradesModify = useSetRecoilState(tradesModifyGlobalState)

  const handleButton = () => {
    setTradesModify(initialTradeModifyGlobalState)
    editImageState(initialImageEdit)

    navigate('/groupPurchase')
  }

  return (
    <>
      <Header
        centerText="공동 구매 수정하기"
        leftIcon={
          <StyledIcon onClick={handleButton}>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <EditPurchaseUploadList></EditPurchaseUploadList>
    </>
  )
}
const StyledIcon = styled.div`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
