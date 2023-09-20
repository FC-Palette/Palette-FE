import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { css, styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'
import { UploadFooter } from 'components/trades/uploadproduct/index'
import { SecondHandUploadList } from 'components/trades/uploadsecondhand/index'

export const SecondHandUpload = () => {
  return (
    <>
      <Header
        centerText="공동 구매 제안하기"
        leftIcon={
          <StyledIcon>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
      <SecondHandUploadList></SecondHandUploadList>
      <UploadFooter></UploadFooter>
    </>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
