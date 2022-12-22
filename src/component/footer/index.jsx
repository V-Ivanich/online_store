import React from "react";
import { Container, Col } from "react-bootstrap";
import styles from "./footer.module.scss";

export const Footer = () => {
    return (
        <>
            <Container className={styles.body_footer}>
                <Col></Col>
                <Col>
                    <p>Информация</p>
                    <a href="!#">О компании</a>
                    <a href="!#">Контакты</a>
                    <a href="!#">Акции</a>
                    <a href="!#">Магазины</a>
                </Col>
                <Col>
                    <div className="">
                        <p>Интернет-магазин</p>
                        <a href="!#">Доставка и самовывоз</a>
                        <a href="!#">Оплата</a>
                        <a href="!#">Возврат-обмен</a>
                        <a href="!#">Новости</a>
                    </div>
                </Col>
                <Col></Col>
            </Container>
        </>
    );
};
