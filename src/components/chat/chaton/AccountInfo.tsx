import { styled } from 'styled-components'
import { Copy, Edit2 } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import { Flexbox } from 'styles/index'
import { useCallback, useEffect } from 'react'
import { getAccount, getNotice } from 'api/index'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useQuery } from '@tanstack/react-query'
import { accInfoState, roomIdState } from 'recoil/index'
import { CHAT_TEXTS } from 'constants/index'
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
export const AccountInfo = ({ isHost }) => {
  const navigate = useNavigate()
  const roomId = useRecoilValue(roomIdState)
  const [accInfo, setAccInfo] = useRecoilState(accInfoState)
  const toEditPage = () => {
    navigate('/groupupload/1')
  }
  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(accInfo.accountNumber)
  }, [])
  const iconProps = {
    size: '16',
    cursor: 'pointer'
  }

  const { data: notice } = useQuery(['notice', roomId], () => {
    return getNotice(roomId)
  })
  const contentNotice = notice?.response?.contentNotice
  const contentId = contentNotice.contentId

  if (contentId) {
    const { data: account } = useQuery(
      ['account', contentId],
      () => {
        return getAccount(contentId)
      },
      {
        onSuccess: data =>
          setAccInfo({
            bank: data.response.bank,
            accountNumber: data.response.accountNumber,
            accountOwner: data.response.accountOwner
          })
      }
    )
    console.log(accInfo)
  }

  return (
    <Wrapper>
      <Account>{CHAT_TEXTS.account}</Account>
      <HostAccount>
        {accInfo.bank} {accInfo.accountNumber} {accInfo.accountOwner}
      </HostAccount>
      {isHost && (
        <Edit2
          {...iconProps}
          onClick={toEditPage}
        />
      )}
      {!isHost && (
        <Copy
          {...iconProps}
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
