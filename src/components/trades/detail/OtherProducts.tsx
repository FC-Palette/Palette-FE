import { styled } from 'styled-components'
import {
  TradesImage,
  TradesTitle,
  TradesPrice
} from 'components/trades/cardlist/index'
import { theme } from 'styles/index'

export const OthertProducts = () => {
  return (
    <Wrapper>
      <TradesImage imageUrl=""></TradesImage>
      <InfoWrapper>
        <TradesTitle title="이거사세요"></TradesTitle>
        <TradesPrice price="5000"></TradesPrice>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 165px;
  height: 225px;
  margin: 7% 5.7% 0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0px 8px 16px ${theme.greyScale.grey3};
`

const InfoWrapper = styled.div`
  padding: 10px;
`
