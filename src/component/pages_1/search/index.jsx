import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./search.module.scss";

export const Search = () => {
    return (
        <>
            <Container className={styles.body_search}>
                <Row>
                    <Col className="p-0 mt-1">
                        <button type="button" className="btn btn-light">
                            Поиск по номеру
                        </button>
                    </Col>
                    <Col className="p-0 mt-1">
                        <button type="button" className="btn btn-light">
                            Поиск по марке
                        </button>
                    </Col>
                    <Col className="col-3 p-0 mt-1">
                        <button type="button" className="btn btn-light">
                            Поиск по названию товара
                        </button>
                    </Col>
                    <Col className="col-6"></Col>
                </Row>
                <Row className="d-flex align-bottom mt-2 h-40">
                    <Col className="col-sm-11">
                        <input className="w-100 h-100" />
                    </Col>
                    <Col className="col-sm">
                        <button className="w-100">искать</button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
