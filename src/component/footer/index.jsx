import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <>
      <Container className={styles.body_footer}>
        <h3>footer</h3>
      </Container>
    </>
  )
}
