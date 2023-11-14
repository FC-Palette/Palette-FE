import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { Input } from 'components/index'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { tradesModifyGlobalState } from 'recoil/index'
import { useRecoilState } from 'recoil'
import { ArrowRight2 } from 'iconsax-react'
import { bankOptions } from 'components/common/index'

const TRADES_ACCOUNT_TEXT = [
  { id: 1, text: '계좌번호 입력' },
  { id: 2, text: '계좌주 성명' }
]

export const EditAccount = () => {
  const [tradesModify, setTradesModify] = useRecoilState(
    tradesModifyGlobalState
  )
  const { bank, accountNumber, accountOwner } = tradesModify

  const handleChangeBank = event => {
    const selectedBankValue = event.target.value

    setTradesModify(prev => ({
      ...prev,
      bank: selectedBankValue
    }))
  }

  const handleChangeAccount = event => {
    const text = event.target.value
    setTradesModify(prev => ({
      ...prev,
      accountNumber: text
    }))
  }

  const handleChangeAccountOwner = event => {
    const text = event.target.value
    setTradesModify(prev => ({
      ...prev,
      accountOwner: text
    }))
  }

  return (
    <>
      <Wrapper>
        <CustomSelect
          value={bank}
          onChange={handleChangeBank}
          IconComponent={ArrowRight2}>
          {bankOptions.map((bankOption, index) => (
            <MenuItem
              key={index}
              value={bankOption.label}>
              {bank === bankOption.label ? (
                <>
                  <img
                    src={bankOption.icon} // 이미지 경로 추가
                    alt={bankOption.label}
                    style={{ maxWidth: '100%' }}
                  />
                  {bankOption.label}
                </>
              ) : (
                <>
                  <IconWrapper>
                    <img
                      src={bankOption.icon} // 이미지 경로 추가
                      alt={bankOption.label}
                      style={{ maxWidth: '100%' }}
                    />
                  </IconWrapper>
                  {bankOption.label}
                </>
              )}
            </MenuItem>
          ))}
        </CustomSelect>

        {TRADES_ACCOUNT_TEXT.map(item => (
          <InputFocus key={item.id}>
            <Input
              $inputWidth={
                item.id === 1 ? '210px' : item.id === 2 ? '115px' : ''
              }
              $inputHeight="48px"
              $borderColor={theme.greyScale.grey3}
              $borderRadius="8px"
              $paddingLeft="12px"
              ph={item.text}
              value={item.id === 1 ? accountNumber : accountOwner}
              onChange={
                item.id === 1 ? handleChangeAccount : handleChangeAccountOwner
              }
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

const CustomSelect = styled(Select)`
  && {
    width: 335px;
    border-radius: 8px;
    height: 48px;

    &:focus {
    }
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`
