import React from 'react'
import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import { UploadTitle } from 'components/trades/uploadproduct/index'
import { Input } from 'components/index'
import { TRADES_TEXT } from 'constants/trades/index'
import { Component } from 'iconsax-react'

export const TitleInput = () => {
  return (
    <Wrapper>
      {TRADES_TEXT.map(item => (
        <ComponentWappper key={item.title}>
          <TitleWrapper>
            <UploadTitle Text={item.title}></UploadTitle>
          </TitleWrapper>
          <InputWrapper>
            {item.component === Input ? (
              <Input
                $inputWidth={item.props?.item ? '324px' : '350px'}
                $inputHeight={
                  item.title === '제품에 대한 상세 설명을 입력해주세요.'
                    ? '180px'
                    : '48px'
                }
                $borderColor={theme.greyScale.grey3}
                $borderRadius="8px"
                $paddingLeft="12px"
                ph={item.props?.ph}
              />
            ) : (
              React.createElement(item.component)
            )}
            {item.props?.item && <ItemText>{item.props?.item}</ItemText>}
          </InputWrapper>
        </ComponentWappper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ComponentWappper = styled.div`
  margin-top: 32px;
`

const ItemText = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  width: 14px;
  font-size: ${theme.customSize.large};
`

const TitleWrapper = styled.div`
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.greyScale.grey4};
  white-space: pre-wrap;
`

const InputWrapper = styled.div`
  width: 350px;
  color: ${theme.greyScale.grey4};
  font-size: ${theme.customSize.large};
  display: flex;
  align-items: end;
  justify-content: space-between;
`
