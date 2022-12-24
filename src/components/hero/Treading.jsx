import React from "react"
import { news, treading } from "../assets/data/data"
import { Card_lg } from "../common/Card_lg"
import { Title } from "../common/Title"
import Slider from "react-slick"

export const Treading = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className='treading hero'>
      <Title title='Treading' />
      <Slider {...settings}>
        {treading.map((item, i) => (
          <div className='box card hero m-5' key={i}>
            <div className='mr-5'>
              <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
