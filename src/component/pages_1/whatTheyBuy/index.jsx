import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import "./what_buy.module.css";
import foto from "../../../image/kvadrocikl.png";

export const WhatBay = () => {
    return (
        <>
            <Container className="d-flex mt-2 justify-content-centr">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <img src={foto} alt="no" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
};
