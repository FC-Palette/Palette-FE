import { styled } from 'styled-components'
import { Copy, Edit2 } from 'iconsax-react'
export const AccountInfo = ({ isHost }) => {
  return (
    <Wrapper>
      <Account>계좌번호</Account>
      <HostAccount>신한은행 123-4444-67897-12 김*운</HostAccount>
      {isHost && <Edit2 size="16" />}
      {!isHost && <Copy size="16" />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 375px;
  max-height: 28px;
  padding: 6px 24px;
  font-size: 14px;
  background-color: ${props => props.theme.greyScale.bluegrey};
`
const Account = styled.div`
  font-weight: 500;
  min-width: 61px;
  padding-right: 12px;
`
const HostAccount = styled.div`
  width: 100%;
`
