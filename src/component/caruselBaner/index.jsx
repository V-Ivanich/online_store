import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import oneImg from '../../image/moto_1.jpg'
import twoImg from '../../image/moto_2.jpg'
import theeImg from '../../image/moto_3.jpg'
import Container from 'react-bootstrap/Container'
import styles from './carusel.module.scss'

export const Slider = () => {
  return (
    <>
      <Container className={styles.baner_carusel}>
        <Container className={styles.body_carusel}>
          <Carousel>
            <Carousel.Item style={{ height: '400px' }}>
              <img className='d-block' src={oneImg} alt='First slide' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '400px' }}>
              <img className='d-block' src={twoImg} alt='Second slide' />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '400px' }}>
              <img className='d-block' src={theeImg} alt='Third slide' />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <div className={styles.baner}></div>
      </Container>
    </>
  )
}
