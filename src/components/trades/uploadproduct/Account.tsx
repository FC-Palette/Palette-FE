import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Input } from 'components/index'
import { UploadOption } from 'components/trades/uploadproduct/UploadOption'

const TRADES_ACCOUNT_TEXT = [
  { id: 1, text: '계좌번호 입력' },
  { id: 2, text: '계좌주 성명' }
]

export const Account = () => {
  return (
    <>
      <Wrapper>
        <UploadOption />
        {TRADES_ACCOUNT_TEXT.map(item => (
          <InputFocus key={item.id}>
            <Input
              $inputWidth={
                item.id === 1 ? '230px' : item.id === 2 ? '110px' : '350px'
              }
              $inputHeight="48px"
              $borderColor={theme.greyScale.grey3}
              $borderRadius="8px"
              $paddingLeft="12px"
              ph={item.text}
            />
          </InputFocus>
        ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`

const InputFocus = styled.div`
  :focus {
    border: 2px solid ${theme.main.blue0};
  }
`
