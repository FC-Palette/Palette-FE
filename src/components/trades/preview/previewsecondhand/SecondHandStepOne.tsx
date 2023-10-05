import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
// import { UploadFooter } from 'components/trades/uploadproduct/index'
import { SecondHandUploadList } from 'components/trades/upload/index'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import {
  ImageState,
  initialImageState,
  secondhandcreateglobalstate,
  initialSecondHandGlobalState
} from 'recoil/index'

export const SecondHandStepOne = () => {
  const navigate = useNavigate()
  const setImageGlobalState = useSetRecoilState(ImageState)
  const setSecondHandGlobalState = useSetRecoilState(
    secondhandcreateglobalstate
  )

  const handleButton = () => {
    setImageGlobalState(initialImageState)
    setSecondHandGlobalState(initialSecondHandGlobalState)
    navigate('/secondHand')
  }
  return (
    <>
      <Header
        centerText="중고물품 판매하기"
        leftIcon={
          <StyledIcon onClick={handleButton}>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <SecondHandUploadList></SecondHandUploadList>
    </>
  )
}
const StyledIcon = styled.div`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
