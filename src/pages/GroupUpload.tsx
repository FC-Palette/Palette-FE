import { theme } from 'styles/index'
import { Header } from 'components/common/index'
import { css, styled } from 'styled-components'
import { ArrowLeft2 } from 'iconsax-react'

export const GroupUpload = () => {
  return (
    <>
      <Header
        centerText="공동 구매 제안하기"
        leftIcon={
          <StyledIcon>
            <ArrowLeft2 />
          </StyledIcon>
        }></Header>
    </>
  )
}
const StyledIcon = styled.button`
  color: #000;
  font-size: ${theme.customSize.xxlarge};
`
