import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import insta from "../../image/instagram.svg";
import vk from "../../image/vk.svg";
import facebook from "../../image/facebook.svg";
import youtube from "../../image/youtube.svg";
import styles from "./footer.module.scss";

export const Footer = () => {
    return (
        <>
            <Container className={styles.body_footer}>
                <Row className="h-100 justify-content-center">
                    <Col className="col-4 mt-5">
                        <Row>
                            <p>Подпишитесь на нашу рассылку</p>
                            <p>и узнавайте о акция быстрее</p>
                        </Row>
                        <Row className="mt-3">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Введите ваш e-mail:"
                                />
                                <button className="btn btn-primary rounded-0 ms-2 mb-1">
                                    Отправить
                                </button>
                            </div>
                        </Row>
                    </Col>
                    <Col className="col-2 mt-5">
                        <div className={styles.chenge_pafh}>
                            <p>Информация</p>
                            <a href="!#">О компании</a>
                            <a href="!#">Контакты</a>
                            <a href="!#">Акции</a>
                            <a href="!#">Магазины</a>
                        </div>
                    </Col>
                    <Col className="col-2 mt-5">
                        <div className={styles.chenge_pafh}>
                            <p>Интернет-магазин</p>
                            <a href="!#">Доставка и самовывоз</a>
                            <a href="!#">Оплата</a>
                            <a href="!#">Возврат-обмен</a>
                            <a href="!#">Новости</a>
                        </div>
                    </Col>
                    <Col className="col-3">
                        <div className={styles.social}>
                            <img src={insta} alt="no_foto" />
                            <img src={vk} alt="no_foto" />
                            <img src={facebook} alt="no_foto" />
                            <img src={youtube} alt="no_foto" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
