import React from "react";
import { Container } from "react-bootstrap";
import styles from "./what_buy.module.scss";

export const WhatBay = () => {
    return (
        <Container className="p-0 mt-3">
            <div className={styles.conteiner}>
                <div className={styles.prev_btn}>
                    <button className="btn rounded-pill p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-chevron-compact-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                            />
                        </svg>
                    </button>
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
                    <button className="btn rounded-pill p-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bi bi-chevron-compact-right"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </Container>
    );
};
