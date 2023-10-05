import { styled } from 'styled-components'
interface PreviewImgProps {
  $image?: string[]
  $isNone?: boolean
  $isOpacity?: boolean
}
export const CareerMainItemImage = ({ image, remainingSeats }) => {
  const renderRemain = () => {
    if (remainingSeats === 0) {
      return (
        <RemainSpaces $isNone={true}>
          <ImpactColor $isNone={true}>마감되었습니다</ImpactColor>
        </RemainSpaces>
      )
    }
    if (remainingSeats <= 2) {
      return (
        <RemainSpaces $isNone={false}>
          <ImpactColor $isNone={false}>{remainingSeats}자리</ImpactColor>
          남았어요
        </RemainSpaces>
      )
    }
    return
  }

  return (
    <Wrapper>
      <PreviewImg
        $image={image}
        $isOpacity={remainingSeats === 0}>
        {renderRemain()}
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
  background-image: ${props => `url(${props.$image})`};
  background-size: 100% 100%;
  font-size: ${props => props.theme.customSize.medium};
  justify-content: flex-end;
  align-items: contain;
  opacity: ${props => (props.$isOpacity ? 0.6 : 1)};
`
// 미리보기 아래 잔여 참여석
const RemainSpaces = styled.div<PreviewImgProps>`
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
  display: ${props => (props.$isNone ? 'none' : 'span')};
`
// 미리보기 아래 잔여석 글자 강조색
const ImpactColor = styled.p<PreviewImgProps>`
  color: ${props => props.theme.subColor.redD2};
  display: ${props => (props.$isNone ? 'none' : 'span')};
`
