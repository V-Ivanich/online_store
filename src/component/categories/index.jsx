import React from 'react'
import { Container } from 'react-bootstrap'
import { CardItem } from './cardItem'
import styles from './categories.module.scss'
import CategoriesList from '../../dataBase/catalog'

export const Categories = () => {
  const categoriesList = CategoriesList
  return (
    <>
      <Container className={styles.body_categories}>
        {categoriesList.map((itemCategori) => (
          <CardItem
            key={itemCategori.name}
            itemCategories={itemCategori.name}
          />
        ))}
      </Container>
    </>
  )
}
