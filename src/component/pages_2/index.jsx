import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import styles from './listItems.module.scss'

const PagesItems = () => {
    return (
        <>
            <Container>
                <Row>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="!#">Главная</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="!#">Библиотека</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Данные
                            </li>
                        </ol>
                    </nav>
                </Row>
                <Row>
                    <h1>Гидроциклы</h1>
                </Row>
                <Row>
                    <Col>Полноприводные</Col>
                    <Col>от 5000</Col>
                    <Col>BRP</Col>
                    <Col>еще</Col>
                </Row>
                <Row>
                    <Col className="col-3"></Col>
                    <Col className="col-9"></Col>
                </Row>
            </Container>
        </>
    );
};

export default PagesItems;
