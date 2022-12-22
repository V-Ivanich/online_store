import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./popularGoods.module.scss";

export const PopularGoods = () => {
    return (
        <>
            <Container className={styles.body_popular}>
                <Row>
                    <h2>Популярные товары</h2>
                </Row>
                <Row>
                    <div className="d-flex ">
                        <a className={styles.mar_gin} href="!#">
                            запчасти
                        </a>
                        <a className={styles.mar_gin} href="!#">
                            моторы
                        </a>
                        <a className={styles.mar_gin} href="!#">
                            шины
                        </a>
                        <a className={styles.mar_gin} href="!#">
                            электроника
                        </a>
                        <a className={styles.mar_gin} href="!#">
                            инструменты
                        </a>
                        <a className={styles.mar_gin} href="!#">
                            аксессуары
                        </a>
                    </div>
                </Row>
                <Row>
                    <Col className="col-12">
                        <div></div>
                    </Col>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-secondary">
                            Показать еще
                        </button>
                    </div>
                </Row>
            </Container>
        </>
    );
};
