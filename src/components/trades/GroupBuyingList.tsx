import { theme } from 'styles/index'
import { css, styled } from 'styled-components'
import {
  TradesTime,
  TradesViews,
  TradesLikeBtn,
  TradesCategory,
  TradesImage,
  TradesLikeCount,
  TradesTitle,
  TradesPrice
} from 'components/trades/index'

export const GroupBuyingList = () => {
  return (
    <Container>
      <TradesPreview>
        <TradesImage />
        <TradesLikeBtn />
        <TradesTime />
      </TradesPreview>
      <TradesCategory />
      <TitleWrapper>
        <TradesTitle />
        <TradesPrice />
      </TitleWrapper>
      <TradesCount>
        <TradesLikeCount />
        <TradesViews />
      </TradesCount>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 164px;
  height: 284px;
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;
`
const TitleWrapper = styled.div`
  position: absolute;
  width: 165px;
  top: 177px;
  height: 75px;
`

const TradesCount = styled.div``

const TradesPreview = styled.div`
  width: 164px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #d9d9d9;
`
