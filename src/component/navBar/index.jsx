import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../image/logo.svg'
import maps from '../../image/maps.svg'
import heart from '../../image/Heart.svg'
import mens from '../../image/Mens.svg'
import basket from '../../image/Basket.svg'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row className={styles.menu}>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Магазины
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Акции
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='/#'>
              Доставка и оплата
            </a>
          </Col>
          <Col>
            <img src={logo} alt='noLogo' />
          </Col>
          <Col>
            <img src={maps} alt='noLogo' />
            <a className='nav-link' href='!#'>
              Москва,ул.Науки 25
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              <img src={heart} alt='noLogo' />
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              <img src={mens} alt='noLogo' />
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              <img src={basket} alt='noLogo' />
            </a>
          </Col>
        </Row>

        <Row className={styles.catalog}>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Квадроциклы
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Катера
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Гидроциклы
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Лодки
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Вездеходы
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Снегоходы
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Двигатели
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Запчасти
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}
