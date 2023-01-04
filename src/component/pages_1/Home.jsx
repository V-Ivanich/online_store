import React, { useState, useEffect } from "react";
import { Slider } from "./caruselBaner";
import { Search } from "./search";
import { Categories } from "./categories";
import { PopularGoods } from "./popularGoods";
import { Banner } from "./banner";
import { WhatBay } from "./whatTheyBuy";
import goodsItems from "../../dataBase/goods";

const Home = () => {
    const [goods, setGoods] = useState();

    useEffect(() => {
        goodsItems.fetchGoods().then((data) => setGoods(data));
    }, []);

    if (!goods) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                </div>
            </div>
        );
    }
    const goodsSale = goods.filter((item) => item.mark === true);
    return (
        <>
            <Slider sale={goodsSale} />
            <Search />
            <Categories />
            <PopularGoods />
            <Banner />
            <WhatBay />
        </>
    );
};

export default Home;
