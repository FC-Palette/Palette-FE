import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Input } from 'components/index'
import { TRADES_ACCOUNT_TEXT } from 'constants/trades/index'

export const Account = () => {
  return (
    <>
      <Wrapper>
        {TRADES_ACCOUNT_TEXT.map((text, index) => (
          <Input
            key={index}
            $inputWidth={
              index === 0
                ? '350px'
                : index === 1
                ? '230px'
                : index === 2
                ? '110px'
                : '350px'
            }
            $inputHeight="48px"
            $borderColor={theme.greyScale.grey3}
            $borderRadius="8px"
            $paddingLeft="12px"
            ph={text}
          />
        ))}
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
