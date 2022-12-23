import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./banner.module.scss";
import motoBlue2 from "../../../image/CFMOTO-X6-EPS_blue 2.png";
import motoBlue1 from "../../../image/2018-Maverick-TURBO-Blue_2.png";

export const Banner = () => {
    const style1 = styles.center_div + " " + styles.justi_end;
    const style2 = styles.center_div + " " + styles.justi_center;
    const style3 = styles.center_div + " " + styles.justi_start;
    return (
        <>
            <Container className={styles.body_banner}>
                <Row className="row justify-content-md-center h-100">
                    <Col className="col-4">
                        <div className={style1}>
                            <img src={motoBlue2} alt="no_photo" />
                            <img src={motoBlue1} alt="no_photo" />
                        </div>
                    </Col>
                    <Col className="col-4">
                        <div className={style2}>
                            <h1>CКИДКИ на все запчасти до 70%</h1>
                        </div>
                    </Col>
                    <Col>
                        <div className={style3}>
                            <a className={styles.btn_baner}>ПОСМОТЕТЬ ВСЕ</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
