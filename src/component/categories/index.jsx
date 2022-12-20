import React from 'react'
import { Container } from 'react-bootstrap'
import { CardItem } from './cardItem'
import styles from './categories.module.scss'

export const Categories = () => {
  return (
    <>
      <Container className={styles.body_categories}>
        <CardItem />
      </Container>
    </>
  )
}
