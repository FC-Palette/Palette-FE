import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRecoilValue } from 'recoil'
import { careerImageState } from '@/recoil'

export const GetThumbnail = () => {
  const atom = useRecoilValue(careerImageState)
  const thumbnailImage = atom.file

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  if (!thumbnailImage || !Array.isArray(thumbnailImage)) {
    return null
  }

  const previewSlides = thumbnailImage
    .filter((item: any) => item instanceof Blob || item instanceof File)
    .map((item, index) => (
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
    font-size: 10px;
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
