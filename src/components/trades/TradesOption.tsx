import { theme } from 'styles/index'
import { css, styled } from 'styled-components'

export const TradesOption = () => {
  return (
    <Wrapper>
      <select id="sortBy">
        <option value="latest">최신 순</option>
        <option value="oldest">오래된 순</option>
      </select>
    </Wrapper>
  )
}
const Wrapper = styled.header``
