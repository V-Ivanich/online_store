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
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row className={styles.menu}>
          <Col>
            <Link className='nav-link' to='/shops'>
              Магазины
            </Link>
          </Col>
          <Col>
            <Link className='nav-link' to='/action'>
              Акции
            </Link>
          </Col>
          <Col>
            <Link className='nav-link' to='/case'>
              Доставка и оплата
            </Link>
          </Col>
          <Col>
            <img src={logo} alt='noLogo' />
          </Col>
          <Col>
            <img src={maps} alt='noLogo' />
            <Link className='nav-link' to='/map'>
              Москва,ул.Науки 25
            </Link>
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
            <Link className='nav-link' aria-current='page' to='/gidrocikle'>
              Гидроциклы
            </Link>
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
