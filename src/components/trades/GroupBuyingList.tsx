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
  width: 183px;
  height: 284px;
  box-shadow: 0px 8px 16px ${theme.greyScale.grey3};
  border-radius: 8px;
  position: relative;
`

const TradesPreview = styled.div`
  width: 183px;
  height: 150px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

const TitleWrapper = styled.div`
  position: absolute;
  width: 183px;
  top: 187px;
  left: 8px;
  height: 70px;
  padding: 0px 8px;
`

const TradesCount = styled.div`
  display: flex;
  position: absolute;
  width: 155px;
  top: 259px;
  left: 8px;
  height: 17px;
`
