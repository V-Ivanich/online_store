import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './search.module.scss'

export const Search = () => {
  return (
    <>
      <Container className={styles.body_search}>
        <Row>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Поиск по номеру
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Поиск по марке
            </a>
          </Col>
          <Col>
            <a className='nav-link' aria-current='page' href='!#'>
              Поиск по названию товара
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='col-sm-11'>
            <input className='w-100' />
          </Col>
          <Col className='col-sm'>
            <button className='w-100'>искать</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
