import { styled } from 'styled-components'
import { Copy, Edit2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { Flexbox } from 'styles/index'
import { useCallback } from 'react'
// import { getAccount } from 'api/index'
// import { useQuery } from '@tanstack/react-query'
/*
{
	"status": 200, 
	"success": true,
	"response":
		{
			"bank" : "신한은행",
			"accountNumber" : "123-4444-67897-1",
			"accountOwner" : "김*운",
		}
}
*/
export const AccountInfo = ({ isHost, account }) => {
  const navigate = useNavigate()
  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(account.split(' ')[1])
  }, [])
  return (
    <Wrapper>
      <Account>계좌번호</Account>
      <HostAccount>{account}</HostAccount>
      {isHost && (
        <Edit2
          size="16"
          cursor="pointer"
          onClick={() => {
            navigate('/groupupload/1')
          }}
        />
      )}
      {!isHost && (
        <Copy
          size="16"
          cursor="pointer"
          onClick={handleCopy}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Flexbox)`
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
