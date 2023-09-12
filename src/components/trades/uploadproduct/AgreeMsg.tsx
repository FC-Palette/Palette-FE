import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const AgreeMsg = () => {
  return (
    <>
      <Wrapper>
        <AgreeWrapper></AgreeWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
`
const AgreeWrapper = styled.div`
  display: flex;
  width: 350px;
  height: 325px;
  border-radius: 8px;
  background-color: ${theme.greyScale.grey1};
`
