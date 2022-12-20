import React from 'react'
import { Carousel, CarouselItem, Container } from 'react-bootstrap'
import kater from '../../image/Rectangle 55.png'
import oneImg from '../../image/moto_1.jpg'
import twoImg from '../../image/moto_2.jpg'
import theeImg from '../../image/moto_3.jpg'
import styles from './carusel.module.scss'

export const Slider = () => {
  return (
    <>
      <Container className={styles.baner_carousel}>
        <Carousel className={styles.border_carousel}>
          <CarouselItem className={styles.body_carousel}>
            <img className='d-block w-100' src={kater} alt='Photo0' />
            <Carousel.Caption>
              <h1>Почувствуй скорость и экстрим</h1>
              <p>Описание какое то...</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem className={styles.body_carousel}>
            <img className='d-block w-100' src={oneImg} alt='Photo1' />
            <Carousel.Caption>
              <h1>Первый слайд</h1>
              <p>Описание какое то...</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem className={styles.body_carousel}>
            <img className='d-block w-100' src={twoImg} alt='Photo2' />
            <Carousel.Caption>
              <h1>Второй слайд</h1>
              <p>Описание какое то...</p>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem className={styles.body_carousel}>
            <img className='d-block w-100' src={theeImg} alt='Photo3' />
            <Carousel.Caption>
              <h1>Третий слайд</h1>
              <p>Описание какое то...</p>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
        <div className={styles.baner}></div>
      </Container>
    </>
  )
}
