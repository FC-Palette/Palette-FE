import styled from 'styled-components'
import Slider from 'react-slick'

export const GetDetailThumbnail = () => {
  const settings = {
    dots: true, // 이미지 아래에 점 표시
    arrows: false,
    infinite: false, // 무한 슬라이딩
    speed: 100, // 슬라이딩 속도
    slidesToShow: 1, // 보여질 이미지 수
    slidesToScroll: 1 // 스크롤할 이미지 수
  }
  const dummyArr = ['a', 'b', 'c']
  const previewSlides = dummyArr.map(item => <SlideItem key={item} />)

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
    bottom: 10px !important;
  }

  /* 슬라이더 컨테이너 크기 고정  */
  .slick-slider {
    width: 100%;
    height: 100%;
  }
`

const SlideItem = styled.div`
  background-color: rosybrown;
  width: 430px;
  height: 322px;
  img {
    width: 430px;
    height: 322px;

    object-fit: cover;
  }
`
