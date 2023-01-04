import React from "react";
import { Carousel, CarouselItem, Container } from "react-bootstrap";
import kater from "../../../image/Rectangle 55.png";
import oneImg from "../../../image/katera.jpg";
import twoImg from "../../../image/kvadrohod.jpg";
import theeImg from "../../../image/snegohod.jpg";
import CardTemplate from "../../cardTemplate";
import styles from "./carusel.module.scss";
import PropTypes from "prop-types";

export const Slider = ({ sale }) => {
    console.log("sale-", sale);
    return (
        <>
            <Container className={styles.baner_carousel}>
                <Carousel className={styles.border_carousel}>
                    <CarouselItem className={styles.body_carousel}>
                        <img
                            className="d-block w-100"
                            src={kater}
                            alt="Photo0"
                        />
                        <Carousel.Caption>
                            <h1 className="text-light">
                                Почувствуй скорость и экстрим
                            </h1>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem className={styles.body_carousel}>
                        <img
                            className="d-block w-100"
                            src={oneImg}
                            alt="Photo1"
                        />
                        <Carousel.Caption>
                            <h1 className="text-dark">
                                Отдыхай и наслаждайся!
                            </h1>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem className={styles.body_carousel}>
                        <img
                            className="d-block w-100"
                            src={twoImg}
                            alt="Photo2"
                        />
                        <Carousel.Caption>
                            <h1 className="text-warning">
                                Для тебя нет преград
                            </h1>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem className={styles.body_carousel}>
                        <img
                            className="d-block w-100"
                            src={theeImg}
                            alt="Photo3"
                        />
                        <Carousel.Caption>
                            <h1 className="text-warning">И снег не помеха</h1>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
                <div className={styles.baner}>
                    <CardTemplate sale={sale} />
                </div>
            </Container>
        </>
    );
};
Slider.propTypes = {
    sale: PropTypes.array.isRequired
};
