import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './app.module.scss'
import { Header } from '../component/navBar'
import { Slider } from '../component/caruselBaner'
import { Search } from '../component/search'
import { Categories } from '../component/categories'
import { PopularGoods } from '../component/popularGoods'
import { Banner } from '../component/banner'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Container className={styles.body} />
      <Header />
      <Slider />
      <Search />
      <Categories />
      <PopularGoods />
      <Banner />
      <Container />
    </>
  )
}

export default App
