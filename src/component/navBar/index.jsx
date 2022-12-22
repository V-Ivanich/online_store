import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../image/logo.svg";
import maps from "../../image/maps.svg";
import heart from "../../image/Heart.svg";
import mens from "../../image/Mens.svg";
import basket from "../../image/Basket.svg";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <Container className={styles.container}>
                <Row className={styles.menu}>
                    <Col className="col-2 d-flex justify-content-center">
                        <Link className="nav-link" to="/shops">
                            Магазины
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" to="/action">
                            Акции
                        </Link>
                    </Col>
                    <Col className="col-2 d-flex justify-content-center">
                        <Link className="nav-link" to="/case">
                            Доставка и оплата
                        </Link>
                    </Col>
                    <Col className="col-2 d-flex justify-content-center">
                        <img src={logo} alt="noLogo" />
                    </Col>
                    <Col className="col-3 d-flex justify-content-center">
                        <Link className="nav-link" to="/map">
                            <img src={maps} alt="noLogo" />
                            Москва,ул.Науки 25
                        </Link>
                    </Col>
                    {/* <Col></Col>
          <Col></Col> */}
                    <Col className="col-2 d-flex justify-content-center">
                        <a className="nav-link ms-3" href="!#">
                            <img src={heart} alt="noLogo" />
                        </a>
                        <a className="nav-link ms-3" href="!#">
                            <img src={mens} alt="noLogo" />
                        </a>
                        <a className="nav-link ms-3" href="!#">
                            <img src={basket} alt="noLogo" />
                        </a>
                    </Col>
                </Row>

                <Row className={styles.catalog}>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Квадроциклы
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Катера
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link
                            className="nav-link"
                            aria-current="page"
                            to="/gidrocikle"
                        >
                            Гидроциклы
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Лодки
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Вездеходы
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Снегоходы
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Двигатели
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Link className="nav-link" aria-current="page" to="/">
                            Запчасти
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
