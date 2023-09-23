import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { PurchaseUploadList } from 'components/trades/upload/index'

export const PurchaseStepOne = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header
        centerText="공동 구매 제안하기"
        leftIcon={
          <StyledIcon onClick={() => navigate('/groupPurchase')}>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <PurchaseUploadList></PurchaseUploadList>
    </>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
