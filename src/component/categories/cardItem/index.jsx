import React from 'react'
import jetSky from '../../../image/jet_ski_PNG90 1.png'
import styles from './cardItem.module.scss'

export const CardItem = () => {
  return (
    <>
      <div className={styles.body_card_item}>
        <div className={styles.text_title}>
          <div>
            <h3>Гидроциклы</h3>
          </div>
          <div>
            <a href='!#'>Подробее ></a>
          </div>
        </div>
        <div>
          <img src={jetSky} alt='no photos' />
        </div>
      </div>
    </>
  )
}
