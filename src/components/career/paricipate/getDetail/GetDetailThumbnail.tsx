import styled from 'styled-components'
import Slider from 'react-slick'
import { useRecoilValue } from 'recoil'
import { fetchDetailGlobalState } from '@/recoil'
import { useEffect } from 'react'

export const GetDetailThumbnail = () => {
  const atom = useRecoilValue(fetchDetailGlobalState)
  const { image } = atom

  useEffect(() => {}, [image])
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const previewSlides = image.map((item, index) => (
    <SlideItem key={item}>
      <img src={image[index]} />
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
    max-height: 322px;
    min-height: 322px;
    object-fit: cover;
  }
`
