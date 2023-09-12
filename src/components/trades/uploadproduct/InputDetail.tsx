import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { TitleInput } from 'components/trades/uploadproduct/index'

export const InputDetail = () => {
  return (
    <Wrapper>
      <TitleInput></TitleInput>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
`
