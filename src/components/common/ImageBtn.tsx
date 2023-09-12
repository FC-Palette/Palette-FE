import { Add } from 'iconsax-react'
import { UploadTitle } from 'components/trades/uploadproduct/index'
import { Button } from 'components/common/Button'
import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const ImageBtn = () => {
  return (
    <Wrapper>
      <Image>
        <Button
          color={theme.main.black}
          $bgColor={theme.greyScale.grey1}
          $borderColor={theme.greyScale.grey1}
          $borderRadius="8px"
          $btnHeight="90px"
          $btnWidth="90px">
          <Add />
        </Button>
        <ImagePreview></ImagePreview>
      </Image>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 350px;
`
const Image = styled.div`
  display: flex;
  gap: 8px;
`
const ImagePreview = styled.div`
  border-radius: 8px;
  width: 90px;
  height: 90px;
  background-color: ${theme.greyScale.grey1};
`
