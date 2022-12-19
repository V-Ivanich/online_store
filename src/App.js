import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './component/navBar'
import { Slider } from './component/caruselBaner'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Container />
      <Header />
      <Slider />
      <Container />
    </>
  )
}

export default App
