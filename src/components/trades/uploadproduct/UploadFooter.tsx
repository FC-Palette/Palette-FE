import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Button } from 'components/index'

export const UploadFooter = () => {
  return (
    <>
      <Wrapper>
        <Button
          $bgColor={theme.main.blue0}
          $borderRadius="8px"
          $btnHeight="60px"
          $btnWidth="350px"
          //  $fontSize={$fontSize}
        ></Button>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`
