import React from 'react'
import { theme } from 'styles/index'
import { styled } from 'styled-components'
import { UploadTitle } from 'components/trades/upload/index'
import { Input } from 'components/index'
import { TRADES_TEXT } from 'constants/trades/index'
import { inputUtils } from 'utils/index'
import { tradescreateglobalstate } from 'recoil/index'
import { useRecoilState } from 'recoil'

export const PurchaseUploadList = () => {
  const [tradesGlobalState, setTradesGlobalState] = useRecoilState(
    tradescreateglobalstate
  )
  const maxTitleLength = 25

  console.log(tradesGlobalState)

  return (
    <Wrapper>
      {TRADES_TEXT.map((item, index) => (
        <ComponentWappper key={index}>
          <TitleWrapper>
            <UploadTitle Text={item.title}> </UploadTitle>
            {item.title === '제품 이미지를 등록 해주세요.' && (
              <TitleDescription>(최대 5장)</TitleDescription>
            )}
            {index !== 6 && index !== 8 && <EssentialIcon>*</EssentialIcon>}
          </TitleWrapper>
          <InputWrapper>
            {item.component === Input ? (
              <InputFocus>
                <Input
                  $inputWidth={item.props?.item ? '300px' : '335px'}
                  $inputHeight={'48px'}
                  $borderColor={theme.greyScale.grey3}
                  $borderRadius="8px"
                  $paddingLeft="12px"
                  ph={item.props?.ph}
                  onChange={e =>
                    inputUtils(
                      e.target.value,
                      item.field,
                      setTradesGlobalState,
                      maxTitleLength
                    )
                  }
                />
              </InputFocus>
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
  overflow-y: scroll;
  margin-top: 12px;
`

const InputFocus = styled.div`
  :focus {
    border: 2px solid ${theme.main.blue0};
  }
`

const ComponentWappper = styled.div`
  margin-bottom: 32px;
`

const ItemText = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  width: 14px;
  font-size: ${theme.customSize.large};
`

const TitleWrapper = styled.span`
  font-size: ${theme.customSize.xxlarge};
  color: ${theme.greyScale.grey6};
  white-space: pre-wrap;
  display: flex;
`

const InputWrapper = styled.div`
  width: 335px;
  color: ${theme.greyScale.grey4};
  font-size: ${theme.customSize.large};
  display: flex;
  align-items: end;
  justify-content: space-between;
`
const TitleDescription = styled.div`
  font-size: ${theme.customSize.large};
  color: ${theme.greyScale.grey7};
  display: flex;
  padding-top: 2px;
`
const EssentialIcon = styled.div`
  color: ${theme.subColor.red0};
  display: flex;
  align-items: flex-end;
  margin-bottom: 2px;
`
