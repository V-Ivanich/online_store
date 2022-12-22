import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./banner.module.scss";
import motoBlue2 from "../../../image/CFMOTO-X6-EPS_blue 2.png";
import motoBlue1 from "../../../image/2018-Maverick-TURBO-Blue_2.png";

export const Banner = () => {
    return (
        <>
            <Container className={styles.body_banner}>
                <Row>
                    <Col>
                        <img src={motoBlue2} alt="no_photo" />
                        <img src={motoBlue1} alt="no_photo" />
                    </Col>
                    <Col>
                        <p>CКИДКИ на все запчасти до 70%</p>
                    </Col>
                    <Col>
                        <button>ПОСМОТЕТЬ ВСЕ</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
