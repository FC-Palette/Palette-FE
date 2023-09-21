import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const UploadTitle = ({ Text, children }) => {
  return (
    <>
      <Wrapper>{Text}</Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  font-size: ${theme.customSize.xlarge};
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 15px;
  color: ${theme.greyScale.grey6};
`
