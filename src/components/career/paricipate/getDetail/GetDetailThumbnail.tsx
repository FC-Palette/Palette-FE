import styled from 'styled-components'
import Slider from 'react-slick'

export const GetDetailThumbnail = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
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

// const ThumbnailSlider = styled.div`
//   width: 430px;
//   height: 322px;
//   overflow: hidden;
//   // 점 위치
//   .slick-dots {
//     bottom: 10px !important;
//   }

//   /* 슬라이더 컨테이너 크기 고정  */
//   .slick-slider {
//     width: 100%;
//     height: 100%;
//   }
// `

// const SlideItem = styled.div`
//   background-color: rosybrown;
//   width: 430px;
//   height: 322px;
//   img {
//     width: 430px;
//     height: 322px;

//     object-fit: cover;
//   }
// `

// 수정 (9.23)
const ThumbnailSlider = styled.div`
  width: 100%;
  height: 322px;
  background-color: rosybrown;
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
