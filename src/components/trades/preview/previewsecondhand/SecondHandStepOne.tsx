import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
// import { UploadFooter } from 'components/trades/uploadproduct/index'
import { SecondHandUploadList } from 'components/trades/upload/index'
import { useNavigate } from 'react-router-dom'

export const SecondHandStepOne = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header
        centerText="중고물품 판매하기"
        leftIcon={
          <StyledIcon onClick={() => navigate('/secondHand')}>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <SecondHandUploadList></SecondHandUploadList>
      {/* <UploadFooter handleNextStep={handleNextStep} /> */}
    </>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
