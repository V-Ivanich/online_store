import React from 'react'
import styles from './header.module.scss'

const Header = () => {
  return (
    <>
      <div className='container'>
        <ul className='nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='!#'>
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
      </div>

      <div className={styles.catalog}>
        <ul className={styles.navline}>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='!#'>
              Квадроциклы
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Катера
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Гидроциклы
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Лодки
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Вездеходы
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Снегоходы
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Двигатели
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='!#'>
              Запчасти
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
