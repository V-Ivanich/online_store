import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { Container } from "react-bootstrap";
import "./what_buy.module.css";
import foto from "../../../image/kvadrocikl.png";

export const WhatBay = () => {
    return (
        <>
            <Container>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    slidesPerGroup={1}
                    speed={800}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="images">
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </Container>
        </>
    );
};
