import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Thumbnail = ({ images }) => {
  const thumbnailImage = images || []

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const previewSlides = thumbnailImage.map((item: any, index: any) => (
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
  width: 100%;
  height: 322px;
  min-height: 322px;
  background-color: transparent;

  // 점 위치
  .slick-dots {
    bottom: 10px;
  }

  .slick-dots li button:before {
    color: ${props => props.theme.main.blue0};
    font-size: 20px;
  }

  .slick-dots li {
    width: 30px;
  }

  .slick-slider {
    width: 100%;
    height: 100%;
  }
`
const SlideItem = styled.div`
  img {
    width: 100%;
    height: 322px;
    object-fit: cover;
  }
`
