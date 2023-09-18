import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { CareerCreateGlobalState } from '../..'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const GetThumbnail = () => {
  const globalState = useRecoilValue(CareerCreateGlobalState)
  const thumbnailImage = globalState?.meetupImages

  const settings = {
    dots: true, // 이미지 아래에 점 표시
    arrows: true,
    infinite: true, // 무한 슬라이딩
    speed: 500, // 슬라이딩 속도
    slidesToShow: 1, // 보여질 이미지 수
    slidesToScroll: 1 // 스크롤할 이미지 수
  }

  const previewSlides = thumbnailImage.map((item, index) => (
    <SlideItem key={index}>
      <img
        src={URL.createObjectURL(item)}
        alt={`Thumbnail ${index + 1}`}
      />
    </SlideItem>
  ))

  return (
    <>
      <ThumbnailSlider>
        <Slider {...settings}>{previewSlides}</Slider>
      </ThumbnailSlider>
    </>
  )
}

const ThumbnailSlider = styled.div`
  width: 430px;
  height: 322px;
  overflow: hidden;
  // 점 위치
  .slick-dots {
    bottom: 10px;
  }

  /* 슬라이더 컨테이너 크기 고정  */
  .slick-slider {
    width: 100%;
    height: 100%;
  }
`

const SlideItem = styled.div`
  img {
    width: 430px;
    height: 322px;

    object-fit: cover;
  }
`
