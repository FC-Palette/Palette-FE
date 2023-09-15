import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Input } from 'components/index'

export const DeadLine = () => {
  const today = new Date()
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  return (
    <>
      <Wrapper>
        <Input
          $inputWidth="160px"
          $inputHeight="48px"
          $borderColor={theme.greyScale.grey3}
          $borderRadius="8px"
          $paddingLeft="12px"
          ph={formattedDate}></Input>
        <Text>~</Text>
        <Input
          $inputWidth="160px"
          $inputHeight="48px"
          $borderColor={theme.greyScale.grey3}
          $borderRadius="8px"
          $paddingLeft="12px"
          ph={formattedDate}></Input>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 9px;
`

const Text = styled.div`
  width: 12px;
  display: flex;
  align-items: center;
`
