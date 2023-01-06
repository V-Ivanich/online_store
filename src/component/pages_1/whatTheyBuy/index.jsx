import React from "react";
import { Container } from "react-bootstrap";
import styles from "./what_buy.module.scss";

export const WhatBay = () => {
    const prevPosition = styles.absolute_btn + " " + styles.prev_position;
    return (
        <Container className="p-0 mt-3">
            <div className={styles.conteiner}>
                <div className={styles.prev_btn}>
                    <div className={prevPosition}>
                        <button className="btn rounded-pill">
                            <i className="bi bi-chevron-compact-left sp-3"></i>
                        </button>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.slide_set}>
                        <div className={styles.slide_1}>1</div>
                        <div className={styles.slide_2}>2</div>
                        <div className={styles.slide_3}>3</div>
                        <div className={styles.slide_4}>4</div>
                        <div className={styles.slide_5}>5</div>
                        <div className={styles.slide_6}>6</div>
                        <div className={styles.slide_7}>7</div>
                        <div className={styles.slide_8}>8</div>
                    </div>
                </div>
                <div className={styles.next_btn}>
                    <div className={styles.absolute_btn}>
                        <button className="btn rounded-pill">
                            <i className="bi bi-chevron-compact-right "></i>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};
