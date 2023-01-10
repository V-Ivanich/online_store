import React from "react";
import styles from "./what_buy.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import foto from "../../../image/kvadrocikl.png";

export const WhatBay = () => {
    return (
        <>
            <div className={styles.back_col}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    grabCursor={true}
                    speed={800}
                    loop={true}
                    navigation={true}
                    modules={[Thumbs, Navigation]}
                    className={styles.mySwiper}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img src={foto} alt="no" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className="images">
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiper_image}>
                            <div className={styles.images}>
                                <img
                                    className={styles.slide_image}
                                    src={foto}
                                    alt="no"
                                />
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </>
    );
};
