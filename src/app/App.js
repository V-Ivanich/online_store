import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.module.scss'
import { Header } from '../component/navBar'
import { Slider } from '../component/caruselBaner'
import { Search } from '../component/search'
import { Categories } from '../component/categories'
import { PopularGoods } from '../component/popularGoods'
import { Banner } from '../component/banner'
import { WhatBay } from '../component/whatTheyBuy'
import { Footer } from '../component/footer'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Container />
      <Header />
      <Slider />
      <Search />
      <Categories />
      <PopularGoods />
      <Banner />
      <WhatBay />
      <Footer />
      <Container />
    </>
  )
}

export default App
