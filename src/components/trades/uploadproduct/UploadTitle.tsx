import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const UploadTitle = ({ Text }) => {
  return (
    <>
      <Wrapper>{Text}</Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 21px;
  font-size: ${theme.customSize.xlarge};
  margin-bottom: 8px;
  font-weight: 700;
  color: ${theme.greyScale.grey6};
`
