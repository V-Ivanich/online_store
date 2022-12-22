import React from "react";
import { Container, Col } from "react-bootstrap";
import styles from "./footer.module.scss";

export const Footer = () => {
    return (
        <>
            <Container className={styles.body_footer}>
                <Col></Col>
                <Col>
                    <p>Информация</p> О компании Контакты Акции Магазины
                </Col>
                <Col></Col>
                <Col></Col>
            </Container>
        </>
    );
};
