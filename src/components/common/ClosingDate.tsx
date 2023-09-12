import React from 'react'
import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { Button } from 'components/common/index'
import { TRADES_CLOSING_TEXT } from 'constants/trades/index'

export const ClosingDate = () => {
  return (
    <>
      <Wrapper>
        {TRADES_CLOSING_TEXT.map(text => (
          <React.Fragment key={text}>
            <ButtonWrapper>
              <Button
                color={theme.main.blue0}
                $bgColor={theme.main.white}
                $btnWidth="20px"
                $btnHeight="20px"
                $borderColor={theme.main.blue0}
                $borderRadius="12px"></Button>
              <DetailText>{text}</DetailText>
            </ButtonWrapper>
          </React.Fragment>
        ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``

const ButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
  height: 30px;
  align-items: center;
`
const DetailText = styled.div`
  color: ${theme.greyScale.grey9};
  font-size: ${theme.customSize.large};
`
