import { theme } from 'styles/index'
import { styled } from 'styled-components'
import {
  TradesTime,
  TradesViews,
  TradesLikeBtn,
  TradesCategory,
  TradesImage,
  TradesLikeCount,
  TradesTitle,
  TradesPrice
} from 'components/trades/cardlist/index'

export const TradesCard = () => {
  return (
    <>
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
    </>
  )
}

const Container = styled.div`
  display: flex;
  width: 165px;
  height: 288px;
  box-shadow: 0px 8px 16px ${theme.greyScale.grey3};
  border-radius: 8px;
  position: relative;
`

const TradesPreview = styled.div`
  width: 165px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

const TitleWrapper = styled.div`
  position: absolute;
  width: 162px;
  top: 187px;
  height: 70px;
  padding: 0px 8px;
  align-content: space-between;
  display: flex;
  flex-wrap: wrap;
`

const TradesCount = styled.div`
  display: flex;
  position: absolute;
  width: 155px;
  top: 265px;
  left: 8px;
  height: 17px;
  gap: 10px;
  font-size: ${theme.customSize.medium};
  color: ${theme.greyScale.grey6};
  font-weight: 400;
`
