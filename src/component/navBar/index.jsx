import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <>
      <Container className={styles.container}>
        <Row>
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='!#'>
                Магазины
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='!#'>
                Акции
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/#'>
                Доставка и оплата
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='!#'>
                DRIVE
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='!#'>
                MOTO
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='!#'>
                Москва,
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='!#'>
                ул.Науки 25
              </a>
            </li>
          </ul>
        </Row>

        <Row className={styles.catalog}>
          <Col>
            <a className='nav-link active' aria-current='page' href='!#'>
              Квадроциклы
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Катера
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Гидроциклы
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Лодки
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Вездеходы
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Снегоходы
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Двигатели
            </a>
          </Col>
          <Col>
            <a className='nav-link' href='!#'>
              Запчасти
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}
