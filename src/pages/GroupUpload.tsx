import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { css, styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import {
  UploadDetail,
  UploadFooter
} from 'components/trades/uploadproduct/index'

export const GroupUpload = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header
        centerText="공동 구매 제안하기"
        leftIcon={
          <StyledIcon onClick={() => navigate('/grouppurchase')}>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <UploadDetail></UploadDetail>
      <UploadFooter></UploadFooter>
    </>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
