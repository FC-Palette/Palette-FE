import { styled } from 'styled-components'
interface PreviewImgProps {
  image: string[]
}
export const CareerMainItemImage = ({ image, remainingSeats }) => {
  return (
    <Wrapper>
      <PreviewImg image={image}>
        <RemainSpaces>
          <ImpactColor>{remainingSeats}자리</ImpactColor>
          남았어요
        </RemainSpaces>
      </PreviewImg>
    </Wrapper>
  )
}
// 이미지 위치 래퍼
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

//  미리보기 이미지
const PreviewImg = styled.div<PreviewImgProps>`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-image: ${props => `url(${props.image})`};
  background-size: 100% 100%;
  font-size: ${props => props.theme.customSize.medium};
  justify-content: flex-end;
  align-items: contain;
`
// 미리보기 아래 잔여 참여석
const RemainSpaces = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  font-size: ${props => props.theme.customSize.medium};
  color: ${props => props.theme.main.white};
  background-color: ${props => props.theme.greyScale.grey8};
  gap: 2px;
`
// 미리보기 아래 잔여석 글자 강조색
const ImpactColor = styled.p`
  color: ${props => props.theme.subColor.redD2};
`
