import styled from "styled-components"
import { Input } from ".."

export const FriendListSearch = () => {
  return (
    <Wrap>
      <Input ph="검색어를 입력하세요."></Input>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 0 24px;
  Input{
    width: 100%;
  }
`