import React from "react";
import { Container, Carousel, CarouselItem } from "react-bootstrap";
import styles from "./what_buy.module.scss";

export const WhatBay = () => {
    return (
        <>
            <Container className={styles.body_what}>
                <Carousel className="carousel" role="listbox">
                    <CarouselItem className="carousel-item">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img
                                        src="//via.placeholder.com/500x400/31f?text=1"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-img-overlay">Slide 1</div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="carousel-item">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img
                                        src="//via.placeholder.com/500x400/e66?text=2"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-img-overlay">Slide 2</div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img
                                        src="//via.placeholder.com/500x400/7d2?text=3"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-img-overlay">Slide 3</div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="carousel-item">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img
                                        src="//via.placeholder.com/500x400?text=4"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-img-overlay">Slide 4</div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="carousel-item">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img
                                        src="//via.placeholder.com/500x400/aba?text=5"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-img-overlay">Slide 5</div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="carousel-item">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img
                                        src="//via.placeholder.com/500x400/fc0?text=6"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="card-img-overlay">Slide 6</div>
                            </div>
                        </div>
                    </CarouselItem>
                    <a
                        className="carousel-control-prev bg-transparent w-aut"
                        href="#recipeCarousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                    </a>
                    <a
                        className="carousel-control-next bg-transparent w-aut"
                        href="#recipeCarousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                    </a>
                </Carousel>
            </Container>
        </>
    );
};
