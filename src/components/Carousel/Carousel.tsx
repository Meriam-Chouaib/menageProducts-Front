import { Stack } from '@mui/material'
import { ImgSlider, StackCarousel } from 'components/Carousel/Carousel.style'
import { CarouselProps } from 'components/Carousel/Carousel.type'
import React from 'react'
import Slider from 'react-slick'

export const Carousel = ({ images }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <StackCarousel>
      <Slider {...settings}>
        {images?.map((item) => (
          <Stack key={item.name}>
            <ImgSlider src={item.name} alt={item.name} />
          </Stack>
        ))}
      </Slider>
    </StackCarousel>
  )
}

export default Carousel
